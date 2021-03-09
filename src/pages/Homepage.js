import React from 'react'
import styled from '@emotion/styled'
import Search from '../components/Search'
import Filter from '../components/Filter'
import CountriesList from '../components/CountriesList'

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 45px 0;
  gap: 30%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`

export default function Homepage() {
  return (
    <>
      <SearchBar>
        <Search />
        <Filter />
      </SearchBar>
      <CountriesList />
    </>
  )
}
