import dynamic from 'next/dynamic'
const ChartApex = dynamic(() => import('react-apexcharts'), { ssr: false }) //dynamic imports

import { theme } from '@chakra-ui/react'

export const Chart = () => {
    const series = [
        {
            name: 'series1',
            data: [56, 34, 16, 83, 84, 16, 83]
        }
    ]
    return (
        <ChartApex
            options={{
                xaxis: {
                    type: 'datetime',
                    axisBorder: { color: theme.colors.blue[700] },
                    axisTicks: { color: theme.colors.blue[700] },
                    categories: [
                        '2021-08-10T00:00:000Z',
                        '2021-08-11T00:00:000Z',
                        '2021-08-12T00:00:000Z',
                        '2021-08-13T00:00:000Z',
                        '2021-08-14T00:00:000Z',
                        '2021-08-15T00:00:000Z',
                        '2021-08-16T00:00:000Z'
                    ]
                },
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
                tooltip: { enabled: false }
            }}
            series={series}
            type="area"
            height={160}
        />
    )
}
