import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { GlobalStyle } from './styles/global'
import { UserProvider } from './contexts/UserContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <Router />
        </UserProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
