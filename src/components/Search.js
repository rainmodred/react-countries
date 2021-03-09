import React from 'react'
import styled from '@emotion/styled'
import { IoSearchOutline } from 'react-icons/io5'

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 769px) {
    max-width: 480px;
  }
`

const Icon = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
`

const Input = styled.input`
  padding: 20px 10px 20px 75px;
  border: none;
  border-radius: 4px;
  width: 100%;
`

export default function Search() {
  return (
    <InputContainer>
      <Icon>
        <IoSearchOutline />
      </Icon>
      <Input type="search" placeholder="Search for a country..."></Input>
    </InputContainer>
  )
}
