import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/styles/theme'
import { AuthProvider } from '../src/hooks/useAuth'
import { WorkingDayProvider } from '../src/hooks/useWorkingDay'
import { UIContextProvider } from '../src/hooks/useUI'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <UIContextProvider>
                <AuthProvider>
                    <WorkingDayProvider>
                        <Component {...pageProps} />
                    </WorkingDayProvider>
                </AuthProvider>
            </UIContextProvider>
        </ChakraProvider>
    )
}

export default MyApp
