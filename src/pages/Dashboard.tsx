import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { Chart } from '../components/molecules/Charts/DailyChart'
import { Header } from '../components/organisms/Header'
import { Sidebar } from '../components/organisms/Sidebar'
import { TemplateApp } from '../components/templates/TemplateApp'

export const Dashboard = () => {
    return (
        <TemplateApp
            header={<Header />}
            sidebar={<Sidebar />}
            main={
                <SimpleGrid
                    py="8"
                    minChildWidth="300px"
                    gap="4"
                    align="flex-start"
                    w="full"
                >
                    <Box bg="gray.800" p="8" borderRadius="4">
                        <Text fontSize="lg" mb="4">
                            Last Day
                        </Text>
                        <Chart />
                    </Box>
                    <Box bg="gray.800" p="8" borderRadius="4">
                        <Text fontSize="lg" mb="4">
                            Last Week
                        </Text>
                        <Chart />
                    </Box>
                </SimpleGrid>
            }
        />
    )
}
