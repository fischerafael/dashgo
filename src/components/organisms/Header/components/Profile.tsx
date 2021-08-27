import { Avatar, Box, Flex, Icon, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export const Profile = () => {
    return (
        <Flex
            spacing="4"
            color="gray.400"
            borderRightWidth={1}
            pr="4"
            borderColor="gray.800"
            align="center"
        >
            <Avatar
                size="md"
                name="Rafael Fischer"
                src="https://github.com/fischerafael.png"
            />
            <Box pl="4">
                <Text fontSize="sm">Rafael Fischer</Text>
                <Text color="gray.400" fontSize="xs">
                    <Icon as={FaGithub} mr="2" />
                    fischerafael
                </Text>
            </Box>
        </Flex>
    )
}
