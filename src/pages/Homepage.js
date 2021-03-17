/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Search from '../components/Search'
import Filter from '../components/Filter'
import CountriesList from '../components/CountriesList'
import ErrorFallback from '../components/ErrorFallback'
import { Spinner } from '../components/Spinner'
import { useCountries } from '../hooks/queryHooks'

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
  const { isLoading, isError, error, countries } = useCountries()

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  function filterByRegion() {
    if (filter === '' || filter === 'all') {
      return countries
    }
    console.log(filter)
    return countries?.filter(({ region }) => region === filter)
  }

  const filteredCountries = filterByRegion()
  const filteredBySearch =
    filteredCountries?.filter(({ name }) =>
      name.toLowerCase().includes(search),
    ) || []

  return (
    <>
      <SearchBar>
        <Search onSearchChange={setSearch} />
        <Filter
          defaultValue={'Filter by Region'}
          onFilterChange={setFilter}
          options={REGIONS}
        />
      </SearchBar>
      {isLoading && (
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Spinner></Spinner>
        </div>
      )}
      {isError ? (
        <ErrorFallback error={error}></ErrorFallback>
      ) : (
        <CountriesList countries={filteredBySearch} />
      )}
    </>
  )
}
