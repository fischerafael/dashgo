import Router from 'next/router'
import { useContext, createContext, useState, useEffect } from 'react'
import { IUser } from '../entities/IUser'
import { signInService, auth } from '../services'

interface AuthContextProps {
    isLoading: boolean
    user: IUser | undefined
    signInWithGoogle: () => Promise<void>
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({ id: '', name: '', avatar: '' })

    const signInWithGoogle = async () => {
        setIsLoading(true)
        try {
            const { uid, displayName, photoURL } = await signInService()
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
            Router.push('/app/working-days')
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, photoURL, uid } = user
                setUser({ id: uid, name: displayName, avatar: photoURL })
            }
        })
        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
