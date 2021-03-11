/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { IoChevronDownOutline } from 'react-icons/io5'
import { useTheme } from '@emotion/react'

const Option = styled.li`
  padding: 5px;
  &:hover {
    opacity: 0.6;
  }
  outline-color: ${({ theme }) => `${theme.text}`};
`

export default function Filter({ filter, options, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()

  function handleFilterChange(option) {
    setIsOpen(false)
    onFilterChange(option)
  }

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        background: `${theme.elementBackground}`,
        borderRadius: '6px',
        width: '200px',
        height: '55px',
        justifyContent: 'space-between',
        position: 'relative',
        ':hover': {
          background: `${theme.background}`,
        },
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        css={{
          padding: '0 25px',
          border: 'none',
          borderRadius: '6px',
          background: 'inherit',
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
          {filter}
        </span>
        <IoChevronDownOutline size="18px" />
      </button>

      <ul
        css={{
          borderRadius: '6px',
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '10px',
          position: 'absolute',
          top: '120%',
          left: '0',
          padding: '16px 25px',
          background: `${theme.elementBackground}`,
          width: '100%',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        {options.map(option => (
          <Option
            onClick={() => handleFilterChange(option)}
            key={option}
            tabIndex="0"
          >
            {option}
          </Option>
        ))}
      </ul>
    </div>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
