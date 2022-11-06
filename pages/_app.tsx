import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../styles/globals.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
