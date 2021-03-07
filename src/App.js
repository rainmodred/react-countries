import React from 'react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Main from './components/Main'

const Container = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  height: 100vh;
`

function App() {
  return (
    <>
      <Global
        styles={{
          html: { boxSizing: 'border-box' },
          '*': {
            boxSizing: 'inherit',
            margin: 0,
            padding: 0,
          },
          body: {
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '14px',
          },
        }}
      />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  )
}

export default App
