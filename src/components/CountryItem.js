import React from 'react'
import styled from '@emotion/styled'

const ListItem = styled.li`
  max-width: 263px;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: opacity 400ms ease;
  &:hover {
    opacity: 0.8;
  }
`

const Image = styled.img`
  width: 100%;
`

const ItemData = styled.div`
  width: 100%;
  padding: 25px;
  background: ${({ theme }) => theme.elementBackground};
`
const Header = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`

const Text = styled.p`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`

export default function CountryItem() {
  return (
    <ListItem>
      <Image src="https://restcountries.eu/data/afg.svg"></Image>
      <ItemData>
        <Header>Name</Header>
        <Text>Population: 0</Text>
        <Text>Region: </Text>
        <Text>Capital: </Text>
      </ItemData>
    </ListItem>
  )
}
