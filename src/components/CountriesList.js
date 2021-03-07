import React from 'react'
import styled from '@emotion/styled'

import CountryItem from './CountryItem'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 75px;
  justify-content: center;
`

export default function CountriesList() {
  return (
    <List>
      <CountryItem></CountryItem>
      <CountryItem></CountryItem>
      <CountryItem></CountryItem>
      <CountryItem></CountryItem>
      <CountryItem></CountryItem>
      <CountryItem></CountryItem>
      <CountryItem></CountryItem>
      <CountryItem></CountryItem>
    </List>
  )
}
