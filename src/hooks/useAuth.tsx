import { useContext, createContext, useState } from 'react'
import Router from 'next/router'
import { auth, firebase } from '../services'
import { IUser } from '../entities/IUser'

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
            const provider = new firebase.auth.GoogleAuthProvider()

            const { user } = await auth.signInWithPopup(provider)

            if (user) {
                const { displayName, photoURL, uid } = user

                if (!displayName || !photoURL)
                    throw new Error('Missing name or photo')

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })

                Router.push('/app/working-days')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
