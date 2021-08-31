export interface IWorkingDay {
    day: string | undefined
    startedAt: string | undefined
    endedAt: string | undefined
    lunchStartedAt: string | undefined
    lunchEndedAt: string | undefined
}

export interface IWorkingDays {
    id: string
    value: IWorkingDay
}
