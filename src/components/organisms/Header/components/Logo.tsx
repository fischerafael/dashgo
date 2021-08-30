import { Text } from '@chakra-ui/react'
import Router from 'next/router'

export const Logo = () => {
    return (
        <Text
            onClick={() => Router.push('/')}
            cursor="pointer"
            fontSize="2xl"
            fontWeight="bold"
            w="full"
            letterSpacing="tight"
        >
            dashgit
            <Text as="span" ml="1" fontSize="3xl" color="blue.500">
                .
            </Text>
        </Text>
    )
}
