import React from 'react'
import styled from '@emotion/styled'
import { IoArrowBackOutline } from 'react-icons/io5'
import CountryDetails from '../components/CountryDetails'

// const Container = styled.div`
//   max-width: 1440px;
//   margin: 0 auto;
// `

const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 15px;
  background: white;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 29%);
  padding: 10px 0;
  width: 136px;
  font-size: 16px;
  margin: 75px 0;
  @media (max-width: 768px) {
    margin: 50px 0;
  }
`

export default function Detail() {
  return (
    <>
      <Button>
        <IoArrowBackOutline></IoArrowBackOutline>
        Back
      </Button>
      <CountryDetails />
    </>
  )
}
