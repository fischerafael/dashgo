import {
    Flex,
    Input,
    Button,
    Stack,
    FormLabel,
    FormControl
} from '@chakra-ui/react'

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
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            name="email"
                            type="email"
                            id="email"
                            focusBorderColor="purple.500"
                            bg="gray.900"
                            variant="filled"
                            _hover={{
                                background: 'gray.900'
                            }}
                            size="lg"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="password">Senha</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            id="password"
                            focusBorderColor="purple.500"
                            bg="gray.900"
                            variant="filled"
                            _hover={{
                                background: 'gray.900'
                            }}
                            size="lg"
                        />
                    </FormControl>
                </Stack>

                <Button type="submit" mt="4" colorScheme="purple" size="lg">
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}
