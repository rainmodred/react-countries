import React from 'react'
import styled from '@emotion/styled'
import Homepage from '../pages/Homepage'
// import Search from './Search'
// import Filter from './Filter'
// import CountriesList from './CountriesList'
// import Detail from '../pages/Detail'

const Container = styled.div`
  background: hsl(0, 0%, 98%);
  margin-top: 10px;
`

const Content = styled.div`
  padding: 0 80px 20px 80px;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 30px 20px 30px;
  }
`

export default function Main() {
  return (
    <Container>
      <Content>
        <Homepage />
        {/* <Detail /> */}
      </Content>
    </Container>
  )
}
