/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, ThemeProvider, useTheme } from '@emotion/react'

import React from 'react'
import { Global, css } from '@emotion/react'

export default function GlobalStyles() {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Nunito Sans, sans-serif;
          font-size: 14px;
          background: ${theme.background};
          color: ${theme.text};
        }

        ul {
          list-style: none;
        }

        button,
        a {
          background: ${theme.elementBackground};
          color: ${theme.text};
          cursor: pointer;
          transition: opacity 200ms ease;
          :hover {
            opacity: 0.8;
          }
        }
      `}
    />
  )
}
