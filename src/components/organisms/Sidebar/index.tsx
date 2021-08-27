import { Box, VStack } from '@chakra-ui/react'
import {
    HiOutlineTrendingUp,
    HiOutlineUserAdd,
    HiOutlineUserGroup
} from 'react-icons/hi'
import { NavLink } from './components/NavLink'
import { Section } from './components/Sections'

export const Sidebar = () => {
    return (
        <Box as="aside" w="64" py="8">
            <VStack spacing="4" align="flex-start">
                <Section
                    title="USERS"
                    links={
                        <>
                            <NavLink icon={HiOutlineUserAdd} label="New User" />
                            <NavLink icon={HiOutlineUserGroup} label="Users" />
                        </>
                    }
                />
                <Section
                    title="STATS"
                    links={
                        <>
                            <NavLink
                                icon={HiOutlineTrendingUp}
                                label="Subscriptions"
                            />
                        </>
                    }
                />
            </VStack>
        </Box>
    )
}
