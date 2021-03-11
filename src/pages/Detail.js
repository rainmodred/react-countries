import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ErrorBoundary } from 'react-error-boundary'
import { Link, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { IoArrowBackOutline } from 'react-icons/io5'
import Api from '../api'
import CountryDetails from '../components/CountryDetails'
import ErrorFallback from '../components/ErrorFallback'

const Container = styled.div`
  font-size: 16px;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 29%);
  padding: 10px 0;
  width: 136px;
  font-size: 16px;
  margin: 65px 0;
  @media (max-width: 768px) {
    margin: 50px 0;
  }
`

function Wrapper({ children }) {
  return (
    <Container>
      <StyledLink to="/">
        <IoArrowBackOutline></IoArrowBackOutline>
        Back
      </StyledLink>
      {children}
    </Container>
  )
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default function Detail() {
  const { id } = useParams()

  const [state, setState] = useState({
    status: 'pending',
    country: null,
    error: null,
  })

  const { status, country, error } = state

  useEffect(() => {
    Api.getCountryByCode(id).then(
      country => {
        const { borders } = country
        Promise.all(borders.map(border => Api.getCountryByCode(border))).then(
          countries => {
            setState({
              status: 'resolved',
              country: {
                ...country,
                borders: countries.map(c => ({
                  name: c.name,
                  code: c.alpha3Code,
                })),
              },
            })
          },
        )
      },
      error => setState({ status: 'rejected', error }),
    )
  }, [id])

  if (status === 'pending') {
    return (
      <Wrapper>
        <p>loading...</p>
      </Wrapper>
    )
  }

  if (status === 'rejected') {
    return (
      <Wrapper>
        <ErrorFallback error={error}></ErrorFallback>
      </Wrapper>
    )
  }

  if (status === 'resolved') {
    const {
      name,
      nativeName,
      flag,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = country
    return (
      <Wrapper>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CountryDetails
            name={name}
            nativeName={nativeName}
            flag={flag}
            population={population}
            region={region}
            subregion={subregion}
            capital={capital}
            topLevelDomain={topLevelDomain}
            currencies={currencies}
            languages={languages}
            borders={borders}
          />
        </ErrorBoundary>
      </Wrapper>
    )
  }
}
