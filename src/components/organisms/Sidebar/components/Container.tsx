import { Box, VStack } from '@chakra-ui/react'
import {
    HiOutlineCalendar,
    HiOutlineCash,
    HiOutlineTrendingUp
} from 'react-icons/hi'
import { NavLink } from './NavLink'
import { Section } from './Sections'

export const SideBarContainer = () => {
    return (
        <Box as="aside" w="64" py="8">
            <VStack spacing="4" align="flex-start">
                <Section
                    title="WORK"
                    links={
                        <>
                            <NavLink
                                href="/app/working-days"
                                icon={HiOutlineCalendar}
                                label="Working Days"
                            />
                            <NavLink
                                href="/app/invoices"
                                icon={HiOutlineCash}
                                label="Invoices"
                            />
                        </>
                    }
                />
                <Section
                    title="STATS"
                    links={
                        <>
                            <NavLink
                                icon={HiOutlineTrendingUp}
                                label="Statistics"
                                href="/app/stats"
                            />
                        </>
                    }
                />
            </VStack>
        </Box>
    )
}
