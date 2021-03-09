import React from 'react'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Main from './components/Main'
import { useDarkMode } from './hooks/useDarkMode'
import { darkTheme, lightTheme } from './styles/themes'
import GlobalStyles from './styles/GlobalStyles'

const Container = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  row-gap: 5px;
  height: 100%;
  background: ${({ theme }) => theme.background};
`

function App() {
  const [mode, seMode] = useDarkMode()

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header mode={mode} onThemeChange={seMode} />
        <Main />
      </Container>
    </ThemeProvider>
  )
}

export default App
