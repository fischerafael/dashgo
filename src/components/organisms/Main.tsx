import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { Chart } from '../molecules/Charts/DailyChart'

export const Main = () => {
    return (
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
    )
}
