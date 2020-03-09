import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    cornflowerBlue: 'hsl(219, 79%, 66%)',
    mortar: 'hsl(0, 0%, 35%)',
    nightRider: 'hsl(0, 0%, 20%)',
    nobel: 'hsl(0, 0%, 60%)',
    whiteSmoke: 'hsl(0, 0%, 93%)'
  }
}

const GlobalStyle = createGlobalStyle`
  html { font-family: 'Lato', sans-serif; font-size: 10px; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background-color: ${theme.colors.mortar};
    color: ${theme.colors.whiteSmoke};
    font-size: 2rem;
  }
  a, button, input, li, ul { all: unset; box-sizing: border-box; }
  a { color: ${theme.colors.cornflowerBlue}; cursor: pointer; }
`

const withStyled = Component => {
  const WithStyled = props => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component props={props} />
    </ThemeProvider>
  )

  return WithStyled
}

export default withStyled
