import { Box, Icon, Link, Text, VStack } from '@chakra-ui/react'
import {
    HiOutlineRefresh,
    HiOutlineTrendingUp,
    HiOutlineUserAdd,
    HiOutlineUserGroup
} from 'react-icons/hi'
import { Section } from './components/Sections'

export const Sidebar = () => {
    return (
        <Box as="aside" w="64" py="8">
            <VStack spacing="4" align="flex-start">
                <Section
                    title="USERS"
                    links={
                        <>
                            <Link display="flex" w="full" color="gray.400">
                                <Icon as={HiOutlineUserAdd} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    New User
                                </Text>
                            </Link>
                            <Link display="flex" w="full" color="gray.400">
                                <Icon as={HiOutlineUserGroup} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    Users
                                </Text>
                            </Link>
                        </>
                    }
                />
                <Section
                    title="STATS"
                    links={
                        <>
                            <Link display="flex" w="full" color="gray.400">
                                <Icon as={HiOutlineTrendingUp} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    Subscriptions
                                </Text>
                            </Link>
                        </>
                    }
                />
            </VStack>
        </Box>
    )
}
