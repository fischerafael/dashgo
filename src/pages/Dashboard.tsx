import { Box, VStack } from '@chakra-ui/react'
import { Header } from '../components/organisms/Header'
import { Sidebar } from '../components/organisms/Sidebar'
import { TemplateApp } from '../components/templates/TemplateApp'

export const Dashboard = () => {
    return (
        <TemplateApp
            header={<Header />}
            sidebar={<Sidebar />}
            main={<h1>oi</h1>}
        />
    )
}
