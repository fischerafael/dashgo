import { Box, Icon, Link, Text, VStack } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { HiOutlineRefresh, HiOutlineTrendingUp } from 'react-icons/hi'

interface SectionProps {
    title: string
    links: ReactElement
}

export const Section = ({ title, links }: SectionProps) => {
    return (
        <Box w="full">
            <Text fontWeight="bold" fontSize="small" letterSpacing="widest">
                {title}
            </Text>
            <VStack spacing="4" py="4" align="flex-start">
                {links}
            </VStack>
        </Box>
    )
}
