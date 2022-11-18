import { createTheme, ThemeProvider } from '@mui/material/styles'
import { store } from '../src/store';
import { Provider } from "react-redux";
import '../styles/globals.scss'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
