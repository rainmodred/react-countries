import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const StyledLink = styled(Link)`
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
  height: 100%;
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

export default function CountryItem({
  name,
  code,
  population,
  region,
  capital,
  flag,
}) {
  const path = `detail/${code}`

  return (
    <StyledLink to={path}>
      <Image src={flag}></Image>
      <ItemData>
        <Header>{name}</Header>
        <Text>
          <b>Population:</b> {population}
        </Text>
        <Text>
          <b>Region:</b> {region}
        </Text>
        <Text>
          <b>Capital:</b> {capital}
        </Text>
      </ItemData>
    </StyledLink>
  )
}

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
}
