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
    Tr,
    useBreakpointValue,
    VStack
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import { Header } from '../components/organisms/Header'
import { Pagination } from '../components/organisms/Pagination'
import { Sidebar } from '../components/organisms/Sidebar'
import { TemplateApp } from '../components/templates/TemplateApp'

export const WorkingDays = () => {
    const { push } = useRouter()

    const isMedium = useBreakpointValue({ base: false, md: true })

    return (
        <TemplateApp
            header={<Header />}
            sidebar={<Sidebar />}
            main={
                <VStack
                    as="main"
                    w="full"
                    bg="gray.800"
                    my="8"
                    borderRadius="4"
                >
                    <Flex align="center" w="full" justify="space-between" p="6">
                        <Text fontSize="xl" fontWeight="normal">
                            Working Day
                        </Text>

                        <Button
                            size="sm"
                            fontSize="sm"
                            colorScheme="blue"
                            cursor="pointer"
                            leftIcon={<Icon as={HiOutlinePlus} />}
                            onClick={() => push('/app/working-days/add')}
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
                                {isMedium && (
                                    <>
                                        <Th>
                                            <Text fontSize="xs">
                                                Started at
                                            </Text>
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
                                    </>
                                )}

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
                                {isMedium && (
                                    <>
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
                                    </>
                                )}

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
                        </Tbody>
                    </Table>
                    <Pagination />
                </VStack>
            }
        />
    )
}
