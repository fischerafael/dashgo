import { useDisclosure, UseDisclosureProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

type Props = UseDisclosureProps

const UIContext = createContext({} as Props)

export const UIContextProvider = ({ children }) => {
    const diclosure = useDisclosure()

    const { asPath } = useRouter()

    useEffect(() => {
        diclosure.onClose()
    }, [asPath])

    return <UIContext.Provider value={diclosure}>{children}</UIContext.Provider>
}

export const useUI = () => useContext(UIContext)
