import { Flex } from '@chakra-ui/react'
import { Button } from '../components/atoms/Button'

export const Login = () => {
    return (
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Flex
                as="form"
                width="100%"
                maxWidth={360}
                bg="gray.800"
                p="8"
                borderRadius="4"
                flexDir="column"
            >
                <Button>Sign In with Google</Button>
            </Flex>
        </Flex>
    )
}
