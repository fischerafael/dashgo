import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

import { IUser } from '../../../../entities/IUser'

interface Props {
    user: IUser
}

export const Profile = ({ user }: Props) => {
    return (
        <Flex
            spacing="4"
            color="gray.400"
            borderRightWidth={1}
            pr="4"
            borderColor="gray.800"
            align="center"
        >
            <Avatar size="sm" name={user.name} src={user.avatar} />
            <Box pl="4">
                <Text fontSize="md">{user.name || 'User'}</Text>
            </Box>
        </Flex>
    )
}
