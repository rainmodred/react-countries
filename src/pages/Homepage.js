import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Search from '../components/Search'
import Filter from '../components/Filter'
import CountriesList from '../components/CountriesList'
import Api from '../api'

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 45px 0;
  gap: 10%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default function Homepage() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  console.log(search, filter)

  function filterByRegion() {
    if (filter === '') {
      return countries
    }

    return countries.filter(({ region }) => region === filter)
  }

  const filteredCountries = filterByRegion()
  const filteredBySearch = filteredCountries.filter(({ name }) =>
    name.toLowerCase().includes(search),
  )

  useEffect(() => {
    setCountries(Api.getAllCountries())
    console.log(countries)
  }, [])
  return (
    <>
      <SearchBar>
        <Search onSearchChange={setSearch} />
        <Filter
          filter={filter === '' ? 'Filter by Region' : filter}
          onFilterChange={setFilter}
          options={REGIONS}
        />
      </SearchBar>
      <CountriesList countries={filteredBySearch} />
    </>
  )
}
