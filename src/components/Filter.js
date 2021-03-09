/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { IoChevronDownOutline } from 'react-icons/io5'

const Option = styled.li`
  padding: 5px;
  &:hover,
  &:focus {
    opacity: 0.6;
  }
`

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        borderRadius: '6px',
        width: '200px',
        height: '55px',
        justifyContent: 'space-between',
        position: 'relative',
        ':hover': {
          background: '#DEDEDE',
        },
        ':focus': {
          ouline: '1px solid black',
        },
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        css={{
          padding: '0 25px',
          border: 'none',
          background: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          fontFamily: 'inherit',
          color: 'inherit',
        }}
      >
        <span
          css={{
            whiteSpace: 'nowrap',
          }}
        >
          Filter by Region
        </span>
        <IoChevronDownOutline size="18px" />
      </button>

      <ul
        css={{
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '10px',
          position: 'absolute',
          listStyle: 'none',
          top: '110%',
          left: '0',
          padding: '16px 25px',
          background: 'white',
          width: '100%',
        }}
      >
        <Option tabIndex="0">lorem</Option>
        <Option tabIndex="0">lorem</Option>
        <Option tabIndex="0">lorem</Option>
        <Option tabIndex="0">lorem</Option>
        <Option tabIndex="0">lorem</Option>
        <Option tabIndex="0">lorem</Option>
      </ul>
    </div>
  )
}
