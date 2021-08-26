import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }) //dynamic imports

import { Box, SimpleGrid, Text, theme } from '@chakra-ui/react'

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[700]
    },
    grid: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors[700]
        },
        axisTicks: {
            color: theme.colors[700]
        },
        categories: [
            '2021-08-10T00:00:000Z',
            '2021-08-11T00:00:000Z',
            '2021-08-12T00:00:000Z',
            '2021-08-13T00:00:000Z',
            '2021-08-14T00:00:000Z',
            '2021-08-15T00:00:000Z',
            '2021-08-16T00:00:000Z'
        ]
    }
}

const series = [
    {
        name: 'series1',
        data: [56, 34, 16, 83, 84, 16, 83]
    }
]

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
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    height={160}
                />
            </Box>
            <Box bg="gray.800" p="8" borderRadius="4">
                <Text fontSize="lg" mb="4">
                    Last Week
                </Text>
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    height={160}
                />
            </Box>
        </SimpleGrid>
    )
}