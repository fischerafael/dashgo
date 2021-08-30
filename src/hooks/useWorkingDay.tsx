import Router from 'next/router'
import { createContext, useContext, useState } from 'react'
import { database } from '../services'
import { useAuth } from './useAuth'

interface IWorkingDay {
    day: string | undefined
    startedAt: string | undefined
    endedAt: string | undefined
    lunchStartedAt: string | undefined
    lunchEndedAt: string | undefined
}

interface WorkingDayContextProps {
    workingDay: IWorkingDay
    setWorkingDay: (data: IWorkingDay) => void

    handleCreateWorkingDay: () => Promise<void>
}

const WorkingDayContext = createContext({} as WorkingDayContextProps)

export const WorkingDayProvider = ({ children }) => {
    const { user } = useAuth()

    const [workingDay, setWorkingDay] = useState({} as IWorkingDay)

    const handleCreateWorkingDay = async () => {
        try {
            const workingDayRef = database.ref('workingDay')
            const firebaseWorkingDay = await workingDayRef.push({
                workingDay,
                user
            })
            Router.push('/app/working-days')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <WorkingDayContext.Provider
            value={{
                workingDay,
                setWorkingDay,
                handleCreateWorkingDay
            }}
        >
            {children}
        </WorkingDayContext.Provider>
    )
}

export const useWorkingDay = () => {
    return useContext(WorkingDayContext)
}
