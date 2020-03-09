import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'

const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  height: calc(100vh - (4rem + 2rem));
  margin: auto;
`

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.nightRider};
  height: 100vh;
  margin: auto;
  max-width: 70%;
`

const Layout = ({ children }) => (
  <Main>
    <Navbar />
    <Container>{children}</Container>
  </Main>
)

export default Layout
