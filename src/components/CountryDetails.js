/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom'

import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 120px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
  }
`

const CountryLink = styled(Link)`
  border-radius: 6px;
  padding: 6px 24px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 29%);
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export default function CountryDetails() {
  return (
    <Container>
      <img
        css={{
          maxWidth: '100%',
        }}
        src="https://restcountries.eu/data/afg.svg"
      ></img>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h3
          css={{
            fontSize: '24px',
            marginBottom: '35px',
          }}
        >
          Name
        </h3>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '75px',
            ['@media (max-width: 768px)']: {
              flexDirection: 'column',
              gap: '50px',
            },
          }}
        >
          <Column>
            <p>
              <b>Native Name: </b>name
            </p>
            <p>
              <b>Population: </b>11111
            </p>
            <p>
              <b>Region: </b>saddad
            </p>
            <p>
              <b>Sub Region: </b>dasdad
            </p>
            <p>
              <b>Capital: </b>fgdfdf
            </p>
          </Column>
          <Column>
            <p>
              <b>Top Level Domain: </b>.dsad
            </p>
            <p>
              <b>Currencies: </b>ssss
            </p>
            <p>
              <b>Languages: </b>dsdad
            </p>
          </Column>
        </div>
        <div
          css={{
            display: 'flex',
            gap: '10px',
            ['@media (max-width: 768px)']: {
              flexDirection: 'column',
            },
          }}
        >
          <b>Border Countries:</b>
          <ul
            css={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <li>
              <CountryLink to="">France</CountryLink>
            </li>
            <li>
              <CountryLink to="">Germany</CountryLink>
            </li>
            <li>
              <CountryLink to="">dasdad</CountryLink>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
