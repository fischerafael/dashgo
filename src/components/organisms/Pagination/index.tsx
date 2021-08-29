import { Button, HStack, Text } from '@chakra-ui/react'
import { PaginationButton } from './components/PaginationButton'

export const Pagination = () => {
    return (
        <HStack
            spacing="2"
            h="20"
            align="center"
            justify="space-between"
            w="full"
            p="6"
        >
            <HStack>
                <Text color="gray.500" fontWeight="bold">
                    0 - 10
                </Text>
                <Text color="gray.700">of 103</Text>
            </HStack>
            <HStack>
                <PaginationButton number={1} isCurrent={true} />
                <PaginationButton number={2} isCurrent={false} />
                <PaginationButton number={3} isCurrent={false} />
            </HStack>
        </HStack>
    )
}
