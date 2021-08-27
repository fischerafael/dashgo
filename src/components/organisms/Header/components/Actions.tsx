import { HStack, Icon } from '@chakra-ui/react'
import { HiOutlineBell, HiOutlineLogout } from 'react-icons/hi'

export const Actions = () => {
    return (
        <HStack pl="4" align="center">
            <Icon as={HiOutlineBell} fontSize="24" />
            <Icon as={HiOutlineLogout} fontSize="24" />
        </HStack>
    )
}
