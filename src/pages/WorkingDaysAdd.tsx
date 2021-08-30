import { Flex, HStack, VStack } from '@chakra-ui/react'
import { Button } from '../components/atoms/Button'

import { Input } from '../components/atoms/Input'
import { Header } from '../components/organisms/Header'
import { Sidebar } from '../components/organisms/Sidebar'
import { TemplateApp } from '../components/templates/TemplateApp'
import { useWorkingDay } from '../hooks/useWorkingDay'

export const WorkingDaysAdd = () => {
    const { setWorkingDay, workingDay, handleCreateWorkingDay } =
        useWorkingDay()

    const invalid =
        workingDay.day &&
        workingDay.endedAt &&
        workingDay.lunchEndedAt &&
        workingDay.lunchStartedAt &&
        workingDay.startedAt

    console.log(invalid)

    return (
        <TemplateApp
            header={<Header />}
            sidebar={<Sidebar />}
            main={
                <VStack
                    w="full"
                    bg="gray.800"
                    px="8"
                    py="8"
                    borderRadius="md"
                    spacing="4"
                >
                    <Input
                        value={workingDay.day}
                        onChange={(e) =>
                            setWorkingDay({
                                ...workingDay,
                                day: e.target.value
                            })
                        }
                        type="date"
                        name="day"
                        label="Day"
                    />
                    <HStack w="full" spacing="4">
                        <Input
                            value={workingDay.startedAt}
                            onChange={(e) =>
                                setWorkingDay({
                                    ...workingDay,
                                    startedAt: e.target.value
                                })
                            }
                            type="time"
                            name="startedAt"
                            label="Startet At"
                        />
                        <Input
                            value={workingDay.endedAt}
                            onChange={(e) =>
                                setWorkingDay({
                                    ...workingDay,
                                    endedAt: e.target.value
                                })
                            }
                            type="time"
                            name="endedAt"
                            label="Ended At"
                        />
                    </HStack>
                    <HStack w="full" spacing="4">
                        <Input
                            value={workingDay.lunchStartedAt}
                            onChange={(e) =>
                                setWorkingDay({
                                    ...workingDay,
                                    lunchStartedAt: e.target.value
                                })
                            }
                            type="time"
                            name="lunchAt"
                            label="Lunch Started At"
                        />
                        <Input
                            value={workingDay.lunchEndedAt}
                            onChange={(e) =>
                                setWorkingDay({
                                    ...workingDay,
                                    lunchEndedAt: e.target.value
                                })
                            }
                            type="time"
                            name="lunchAt"
                            label="Lunch Ended At"
                        />
                    </HStack>
                    <Flex w="full" justify="flex-end">
                        <Button
                            type="button"
                            isDisabled={invalid === undefined && true}
                            onClick={handleCreateWorkingDay}
                        >
                            Save
                        </Button>
                    </Flex>
                </VStack>
            }
        />
    )
}
