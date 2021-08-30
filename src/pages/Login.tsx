import { Flex } from '@chakra-ui/react'
import { FormEvent } from 'react'
import { Button } from '../components/atoms/Button'
import { useAuth } from '../hooks/useAuth'

export const Login = () => {
    const { isLoading, signInWithGoogle } = useAuth()

    const onClick = async (e: FormEvent) => {
        e.preventDefault
        await signInWithGoogle()
    }

    return (
        <Flex w="100vw" h="100vh" align="center" justify="center">
            <Button
                disabled={isLoading ? true : false}
                type="button"
                onClick={onClick}
            >
                Sign In With Google
            </Button>
        </Flex>
    )
}
