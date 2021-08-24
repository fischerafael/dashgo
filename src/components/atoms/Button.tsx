import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

interface Props extends ButtonProps {}

export const Button = ({ children }: Props) => {
    return (
        <ChakraButton type="submit" mt="4" colorScheme="blue" size="lg">
            {children}
        </ChakraButton>
    )
}
