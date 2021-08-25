import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    InputProps
} from '@chakra-ui/react'

interface Props extends InputProps {
    name: string
    label?: string
}

export const Input = ({ name, label, ...props }: Props) => {
    return (
        <FormControl>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
                name={name}
                id={name}
                focusBorderColor="blue.500"
                bg="gray.900"
                variant="filled"
                _hover={{
                    background: 'gray.900'
                }}
                size="lg"
                {...props}
            />
        </FormControl>
    )
}
