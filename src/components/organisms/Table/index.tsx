import {
    Button,
    Flex,
    Icon,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { IWorkingDays } from '../../../entities/IWorkingDay'

interface Props {
    workingDays: IWorkingDays[]
}

export const TableChakra = ({ workingDays }: Props) => {
    return (
        <Table colorScheme="whiteAlpha" size="md">
            <Thead h="20">
                <Tr>
                    <Th>
                        <Text fontSize="xs">Date</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xs">Started at</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xs">Ended at</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xs">Lunch</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xs">Hours</Text>
                    </Th>
                    <Th>
                        <Text fontSize="xs"></Text>
                    </Th>
                </Tr>
            </Thead>

            <Tbody>
                {workingDays?.map((day) => {
                    return (
                        <React.Fragment key={day?.id}>
                            <Tr _hover={{ bg: 'gray.900' }}>
                                <Td>
                                    <Text fontSize="sm">{day?.value?.day}</Text>
                                </Td>

                                <Td>
                                    <Text fontSize="sm">
                                        {day?.value?.startedAt}
                                    </Text>
                                </Td>
                                <Td>
                                    <Text fontSize="sm">
                                        {day?.value?.endedAt}
                                    </Text>
                                </Td>
                                <Td>
                                    <Text fontSize="sm">fasdf</Text>
                                </Td>
                                <Td>
                                    <Text fontSize="sm">{day?.value?.day}</Text>
                                </Td>
                                <Td>
                                    <Flex justify="flex-end">
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="blue"
                                            cursor="pointer"
                                            variant="outline"
                                            leftIcon={
                                                <Icon as={HiOutlineSearch} />
                                            }
                                        >
                                            View
                                        </Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        </React.Fragment>
                    )
                })}
            </Tbody>
        </Table>
    )
}
