import {
    Box,
    Button,
    Checkbox,
    Flex,
    Icon,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack
} from '@chakra-ui/react'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'

export const MainWorkingDays = () => {
    return (
        <VStack as="main" w="full" bg="gray.800" my="8" borderRadius="4">
            <Flex align="center" w="full" justify="space-between" p="6">
                <Text fontSize="xl" fontWeight="normal">
                    Working Day
                </Text>

                <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="blue"
                    cursor="pointer"
                    leftIcon={<Icon as={HiOutlinePlus} />}
                >
                    Add New
                </Button>
            </Flex>

            <Table colorScheme="whiteAlpha" size="md">
                <Thead>
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
                    <Tr _hover={{ bg: 'gray.900' }}>
                        <Td>
                            <Text fontSize="sm">29/08/2021</Text>
                        </Td>
                        <Td>
                            <Text fontSize="sm">10:00 am</Text>
                        </Td>
                        <Td>
                            <Text fontSize="sm">19:00 pm</Text>
                        </Td>
                        <Td>
                            <Text fontSize="sm">1</Text>
                        </Td>
                        <Td>
                            <Text fontSize="sm">8</Text>
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
                                    leftIcon={<Icon as={HiOutlineSearch} />}
                                >
                                    View
                                </Button>
                            </Flex>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </VStack>
    )
}
