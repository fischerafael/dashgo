import {
    Flex,
    Input,
    InputGroup,
    InputRightAddon,
    Text,
    Icon
} from '@chakra-ui/react'
import { HiOutlineSearch } from 'react-icons/hi'

export const Header = () => {
    return (
        <Flex as="header" w="full" h="20" justify="center" px="6">
            <Flex maxWidth={1440} w="full" align="center" h="full">
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    w="64"
                    letterSpacing="tight"
                >
                    dashgo
                    <Text as="span" ml="1" fontSize="3xl" color="blue.500">
                        .
                    </Text>
                </Text>

                <InputGroup maxWidth={360} flex="1" w="full">
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

                {/* <Flex
                    as="label"
                    flex="1"
                    px="8"
                    py="2"
                    ml="6"
                    maxWidth={400}
                    color="gray.200"
                    position="relative"
                    bg="gray.800"
                    borderRadius="full"
                >
                    hi
                </Flex> */}
            </Flex>
        </Flex>
    )
}
