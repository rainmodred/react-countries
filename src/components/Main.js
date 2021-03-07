import React from 'react'
import styled from '@emotion/styled'
import Search from './Search'
import Filter from './Filter'

const Container = styled.div`
  background: hsl(0, 0%, 98%);
  margin-top: 10px;
`

const Content = styled.div`
  padding: 0 30px;
  max-width: 1440px;
  margin: 0 auto;
`

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 45px 0;
`

export default function Main() {
  return (
    <Container>
      <Content>
        <SearchBar>
          <Search />
          <Filter />
        </SearchBar>
      </Content>
    </Container>
  )
}
