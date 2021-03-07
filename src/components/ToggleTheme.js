import React from 'react'
import styled from '@emotion/styled'
import { IoMoonOutline } from 'react-icons/io5'

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 5px;
  font-size: 16px;
`

const Text = styled.span`
  ${'' /* font-weight: 600; */}
`

export default function ToggleTheme() {
  return (
    <Container>
      <IoMoonOutline />
      <Text>Dark mode</Text>
    </Container>
  )
}
