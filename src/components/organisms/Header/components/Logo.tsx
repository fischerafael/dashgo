import { Text } from '@chakra-ui/react'

export const Logo = () => {
    return (
        <Text fontSize="2xl" fontWeight="bold" w="64" letterSpacing="tight">
            dashgit
            <Text as="span" ml="1" fontSize="3xl" color="blue.500">
                .
            </Text>
        </Text>
    )
}
