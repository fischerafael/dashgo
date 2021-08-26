import { Box, VStack, Text, Link, Icon } from '@chakra-ui/react'
import { HiOutlineRefresh, HiOutlineTrendingUp } from 'react-icons/hi'

export const Sidebar = () => {
    return (
        <Box as="aside" w="64" py="8">
            <VStack spacing="10" align="flex-start">
                <Box w="full">
                    <Text
                        fontWeight="bold"
                        fontSize="small"
                        letterSpacing="widest"
                    >
                        INCOME
                    </Text>
                    <VStack spacing="4" py="4" align="flex-start">
                        <Link display="flex" w="full" color="blue.500">
                            <Icon as={HiOutlineTrendingUp} fontSize="20" />
                            <Text ml="4" fontWeight="medium">
                                Single
                            </Text>
                        </Link>
                        <Link display="flex" w="full" color="blue.500">
                            <Icon as={HiOutlineRefresh} fontSize="20" />
                            <Text ml="4" fontWeight="medium">
                                Recurring
                            </Text>
                        </Link>
                    </VStack>
                </Box>
                <Box>
                    <Text
                        fontWeight="bold"
                        fontSize="small"
                        letterSpacing="widest"
                    >
                        COMMUNITY
                    </Text>
                </Box>
            </VStack>
        </Box>
    )
}
