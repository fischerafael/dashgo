import { Flex } from '@chakra-ui/react'
import { useAuth } from '../../../hooks/useAuth'
import { Actions } from './components/Actions'
import { Logo } from './components/Logo'
import { Profile } from './components/Profile'
import { Search } from './components/Search'

export const Header = () => {
    const { user } = useAuth()

    return (
        <Flex as="header" w="full" h="20" justify="center">
            <Flex maxWidth={1024} w="full" align="center" h="full">
                <Logo />
                <Search />

                <Flex flex="1" ml="4" justify="flex-end" w="full">
                    <Profile user={user} />
                    <Actions />
                </Flex>
            </Flex>
        </Flex>
    )
}
