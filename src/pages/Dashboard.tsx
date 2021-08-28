import { Header } from '../components/organisms/Header'
import { MainStats } from '../components/organisms/MainStats'
import { Sidebar } from '../components/organisms/Sidebar'
import { TemplateApp } from '../components/templates/TemplateApp'

export const Dashboard = () => {
    return (
        <TemplateApp
            header={<Header />}
            sidebar={<Sidebar />}
            main={<MainStats />}
        />
    )
}
