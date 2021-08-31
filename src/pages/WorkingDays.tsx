import React from 'react'
import {
    Button,
    Flex,
    Icon,
    Text,
    useBreakpointValue,
    VStack
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import { useWorkingDay } from '../hooks/useWorkingDay'
import { HiOutlinePlus } from 'react-icons/hi'
import { Header } from '../components/organisms/Header'
import { Pagination } from '../components/organisms/Pagination'
import { Sidebar } from '../components/organisms/Sidebar'
import { TemplateApp } from '../components/templates/TemplateApp'

import { TableChakra } from '../components/organisms/Table'

export const WorkingDays = () => {
    const { push } = useRouter()
    const { workingDays } = useWorkingDay()

    const isMedium = useBreakpointValue({ base: false, md: true })

    return (
        <TemplateApp
            header={<Header />}
            sidebar={<Sidebar />}
            main={
                <VStack as="main" w="full">
                    <Flex
                        align="center"
                        w="full"
                        justify="space-between"
                        py="8"
                    >
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

                    <VStack w="full" bg="gray.800" borderRadius="8">
                        {isMedium && <TableChakra workingDays={workingDays} />}
                        <Pagination />
                    </VStack>
                </VStack>
            }
        />
    )
}
