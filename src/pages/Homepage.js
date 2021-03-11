import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Search from '../components/Search'
import Filter from '../components/Filter'
import CountriesList from '../components/CountriesList'
import Api from '../api'
import ErrorFallback from '../components/ErrorFallback'

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
  // TODO: useAsync hook
  const [state, setState] = useState({
    status: 'pending',
    countries: [],
    error: null,
  })
  const { status, countries, error } = state

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

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
    Api.getAllCountries().then(
      countries => {
        setState({ status: 'resolved', countries })
      },
      error => {
        setState({ status: 'rejected', error })
      },
    )
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
      {status === 'pending' && <p>loading...</p>}
      {status === 'rejected' ? (
        <ErrorFallback error={error}></ErrorFallback>
      ) : (
        <CountriesList countries={filteredBySearch} />
      )}
    </>
  )
}
