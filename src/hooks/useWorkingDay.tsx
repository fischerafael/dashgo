import Router from 'next/router'
import { createContext, useContext, useState, useEffect } from 'react'
import { IWorkingDay, IWorkingDays } from '../entities/IWorkingDay'
import { database } from '../services'
import { useAuth } from './useAuth'

interface WorkingDayContextProps {
    workingDay: IWorkingDay
    setWorkingDay: (data: IWorkingDay) => void

    workingDays: IWorkingDays[]

    handleCreateWorkingDay: () => Promise<void>
}

const WorkingDayContext = createContext({} as WorkingDayContextProps)

export const WorkingDayProvider = ({ children }) => {
    const { user } = useAuth()

    const [workingDay, setWorkingDay] = useState({} as IWorkingDay)
    const [workingDays, setWorkingDays] = useState([] as IWorkingDays[])

    console.log(workingDays)

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

    useEffect(() => {
        const workingDays = database.ref('workingDay')

        workingDays.on('value', (workingDay) => {
            const response = workingDay.val()

            if (!response || response === undefined) return

            const workingDaysArray = Object.entries(response).map(
                ([key, value]) => {
                    return {
                        id: key,
                        value: value
                    }
                }
            ) as IWorkingDays[]

            setWorkingDays(workingDaysArray)
        })

        return () => {
            workingDays.off('value')
        }
    }, [])

    return (
        <WorkingDayContext.Provider
            value={{
                workingDay,
                setWorkingDay,
                workingDays,
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
