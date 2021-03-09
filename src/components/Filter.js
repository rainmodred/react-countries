import React from 'react'
import styled from '@emotion/styled'

const Select = styled.select`
  border: none;
  border-radius: 4px;
  max-width: 200px;
  width: 100%;
  padding: 19px 25px;
`

export default function Filter() {
  return (
    <Select>
      <option>Filter by Region</option>
    </Select>
  )
}
