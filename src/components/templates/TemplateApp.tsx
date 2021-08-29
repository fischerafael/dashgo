import { Flex } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface Props {
    header: ReactElement
    sidebar: ReactElement
    main: ReactElement
}

export const TemplateApp = ({ header, sidebar, main }: Props) => {
    return (
        <Flex direction="column" h="100vh" align="center" px="2">
            {header}

            <Flex maxWidth={1024} w="100%">
                {sidebar}
                {main}
            </Flex>
        </Flex>
    )
}
