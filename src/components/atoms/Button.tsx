import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

interface Props extends ButtonProps {}

export const Button = ({ children, ...props }: Props) => {
    return (
        <ChakraButton mt="4" colorScheme="blue" size="lg" {...props}>
            {children}
        </ChakraButton>
    )
}
