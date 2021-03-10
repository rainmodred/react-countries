import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { IoArrowBackOutline } from 'react-icons/io5'
import CountryDetails from '../components/CountryDetails'

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

export default function Detail() {
  const { id } = useParams()
  console.log(id)
  return (
    <Container>
      <StyledLink to="/">
        <IoArrowBackOutline></IoArrowBackOutline>
        Back
      </StyledLink>
      <CountryDetails />
    </Container>
  )
}
