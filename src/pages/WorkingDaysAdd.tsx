import { HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import { Button } from '../components/atoms/Button'
import { Input } from '../components/atoms/Input'
import { Header } from '../components/organisms/Header'
import { Sidebar } from '../components/organisms/Sidebar'
import { TemplateApp } from '../components/templates/TemplateApp'

export const WorkingDaysAdd = () => {
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
                    <Input type="date" name="day" label="Day" />
                    <HStack w="full" spacing="4">
                        <Input
                            type="time"
                            name="startedAt"
                            label="Startet At"
                        />
                        <Input type="time" name="endedAt" label="Ended At" />
                    </HStack>
                    <HStack w="full" spacing="4">
                        <Input
                            type="time"
                            name="lunchAt"
                            label="Lunch Started At"
                        />
                        <Input
                            type="time"
                            name="lunchAt"
                            label="Lunch Ended At"
                        />
                    </HStack>
                    <HStack w="full" spacing="4" align="flex-end">
                        <Input name="tasks" label="Tasks" />
                        <Button>Add</Button>
                    </HStack>
                </VStack>
            }
        />
    )
}
