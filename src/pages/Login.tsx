import { Flex, Stack } from '@chakra-ui/react'
import { Button } from '../components/atoms/Button'
import { Input } from '../components/atoms/Input'

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
                <Stack spacing="4">
                    <Input name="email" label="Email" />
                    <Input name="password" label="Password" />
                </Stack>

                <Button>Log In</Button>
            </Flex>
        </Flex>
    )
}
