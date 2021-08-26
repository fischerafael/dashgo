import {
    Flex,
    Input,
    InputGroup,
    InputRightAddon,
    Text,
    Icon,
    HStack,
    Box,
    Avatar
} from '@chakra-ui/react'
import { HiOutlineBell, HiOutlineLogout, HiOutlineSearch } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export const Header = () => {
    return (
        <Flex as="header" w="full" h="20" justify="center">
            <Flex maxWidth={1024} w="full" align="center" h="full">
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    w="64"
                    letterSpacing="tight"
                >
                    dashgit
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

                <Flex flex="1" ml="4" justify="flex-end" w="full">
                    <HStack
                        spacing="4"
                        color="gray.400"
                        borderRightWidth={1}
                        pr="4"
                        borderColor="gray.800"
                    >
                        <Icon as={HiOutlineBell} fontSize="24" />
                        <Icon as={HiOutlineLogout} fontSize="24" />
                    </HStack>

                    <Flex pl="4" align="center">
                        <Box pr="6">
                            <Text fontSize="sm">Rafael Fischer</Text>
                            <Text color="gray.400" fontSize="xs">
                                <Icon as={FaGithub} mr="2" />
                                fischerafael
                            </Text>
                        </Box>

                        <Avatar
                            size="md"
                            name="Rafael Fischer"
                            src="https://github.com/fischerafael.png"
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
