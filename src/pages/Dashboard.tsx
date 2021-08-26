import { Box, VStack } from '@chakra-ui/react'
import { Header } from '../components/organisms/Header'
import { Main } from '../components/organisms/Main'
import { Sidebar } from '../components/organisms/Sidebar'
import { TemplateApp } from '../components/templates/TemplateApp'

export const Dashboard = () => {
    return (
        <TemplateApp
            header={<Header />}
            sidebar={<Sidebar />}
            main={<Main />}
        />
    )
}
