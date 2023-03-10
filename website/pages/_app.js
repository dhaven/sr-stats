import { SessionProvider } from "next-auth/react"
import '../styles/global.css'
import { useRouter } from 'next/router'
import { StyledEngineProvider } from '@mui/material/styles';

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { session } = pageProps
  return (
    <StyledEngineProvider injectFirst>
      <SessionProvider session={session}>
        <Component key={router.asPath} {...pageProps} />
      </SessionProvider>
    </StyledEngineProvider>
  )
}