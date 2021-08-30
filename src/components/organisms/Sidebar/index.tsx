import {
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useBreakpointValue
} from '@chakra-ui/react'

import { useUI } from '../../../hooks/useUI'
import { SideBarContainer } from './components/Container'

export const Sidebar = () => {
    const { isOpen, onClose } = useUI()

    const isDrawer = useBreakpointValue({
        base: true,
        md: false
    })

    if (isDrawer)
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.900" p="8">
                        <DrawerCloseButton />
                        <SideBarContainer />
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )

    return <SideBarContainer />
}
