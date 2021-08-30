import { Flex, Grid, Icon, useBreakpointValue } from '@chakra-ui/react'
import { HiOutlineMenu } from 'react-icons/hi'
import { useAuth } from '../../../hooks/useAuth'
import { useUI } from '../../../hooks/useUI'
import { Actions } from './components/Actions'
import { Logo } from './components/Logo'
import { Profile } from './components/Profile'
import { Search } from './components/Search'

export const Header = () => {
    const { user } = useAuth()
    const { onOpen } = useUI()

    const isMd = useBreakpointValue({ base: false, md: true })

    return (
        <Flex as="header" w="full" h="20" justify="center">
            <Grid
                maxWidth={1024}
                w="full"
                h="full"
                templateColumns={['1fr 1fr', '1fr 1fr', '1fr 2fr 2fr']}
                alignItems="center"
            >
                {isMd && <Logo />}
                {!isMd && (
                    <Icon
                        cursor="pointer"
                        w={6}
                        h={6}
                        as={HiOutlineMenu}
                        onClick={onOpen}
                    />
                )}

                {isMd && <Search />}

                <Flex justify="flex-end" w="full">
                    <Profile user={user} />
                    <Actions />
                </Flex>
            </Grid>
        </Flex>
    )
}
