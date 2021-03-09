import React from 'react'
import styled from '@emotion/styled'
import ToggleTheme from './ToggleTheme'

const Container = styled.div`
  box-shadow: 0px 10px 5px 0px rgba(248, 248, 248, 1);
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`

const HeaderText = styled.span`
  color: black;
  font-size: 20px;
  font-weight: 800;
`

export default function Header() {
  return (
    <Container>
      <Content>
        <HeaderText>Where in the world?</HeaderText>
        <ToggleTheme />
      </Content>
    </Container>
  )
}
