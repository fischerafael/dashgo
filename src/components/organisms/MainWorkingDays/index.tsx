import {
    Box,
    Button,
    Checkbox,
    Flex,
    Icon,
    Table,
    Text,
    Th,
    Thead,
    Tr,
    VStack
} from '@chakra-ui/react'
import { HiOutlinePlus } from 'react-icons/hi'

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

            <Table colorScheme="whiteAlpha">
                <Thead>
                    <Tr>
                        <Th px="6" color="gray.300" width="8">
                            <Checkbox colorScheme="blue" />
                        </Th>
                        <Th>Day</Th>
                        <Th>Worked Hours</Th>
                    </Tr>
                </Thead>
            </Table>
        </VStack>
    )
}
