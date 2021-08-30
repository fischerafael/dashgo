import { Icon, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { HiOutlineSearch } from 'react-icons/hi'

export const Search = () => {
    return (
        <InputGroup w="full" display={['none', 'none', 'flex']}>
            <Input
                id="search"
                borderRadius="full"
                bg="gray.800"
                border="none"
                color="gray.400"
                placeholder="Search"
                _placeholder={{ color: 'gray.600' }}
            />
            <InputRightAddon
                as="label"
                htmlFor="search"
                borderRadius="full"
                bg="gray.800"
                border="none"
                color="gray.600"
            >
                <Icon as={HiOutlineSearch} fontSize="20" />
            </InputRightAddon>
        </InputGroup>
    )
}
