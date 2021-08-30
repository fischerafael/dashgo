import { Flex, Grid } from '@chakra-ui/react'
import { useAuth } from '../../../hooks/useAuth'
import { Actions } from './components/Actions'
import { Logo } from './components/Logo'
import { Profile } from './components/Profile'
import { Search } from './components/Search'

export const Header = () => {
    const { user } = useAuth()

    return (
        <Flex as="header" w="full" h="20" justify="center">
            <Grid
                maxWidth={1024}
                w="full"
                h="full"
                templateColumns={['1fr 1fr', '1fr 1fr', '1fr 2fr 2fr']}
                alignItems="center"
            >
                <Logo />
                <Search />

                <Flex justify="flex-end" w="full">
                    <Profile user={user} />
                    <Actions />
                </Flex>
            </Grid>
        </Flex>
    )
}
