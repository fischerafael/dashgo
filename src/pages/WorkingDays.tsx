import { Header } from '../components/organisms/Header'
import { MainWorkingDays } from '../components/organisms/MainWorkingDays'
import { Sidebar } from '../components/organisms/Sidebar'
import { TemplateApp } from '../components/templates/TemplateApp'

export const WorkingDays = () => {
    return (
        <TemplateApp
            header={<Header />}
            sidebar={<Sidebar />}
            main={<MainWorkingDays />}
        />
    )
}
