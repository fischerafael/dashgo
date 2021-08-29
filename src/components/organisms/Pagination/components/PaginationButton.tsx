import { Button } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    isCurrent?: boolean
    number: ReactNode
}

export const PaginationButton = ({ isCurrent = false, number }: Props) => {
    return (
        <Button
            as="a"
            size="sm"
            fontSize="sm"
            bg={isCurrent ? 'blue.400' : 'blue.900'}
            cursor="pointer"
        >
            {number}
        </Button>
    )
}
