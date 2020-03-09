import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Brand = styled.h1`
  color: ${({ theme }) => theme.colors.nobel};
  font-size: 4rem;
  line-height: 4rem;
  padding: 1rem 0;
`

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 0 2rem;
`

const NavItems = styled.ul`
  align-items: center;
  display: flex;
`

const NavLinkItem = styled(NavLink)`
  border-color: transparent;
  margin: 0 1rem;
  padding: 2rem;
  transition: all 0.3s ease-in-out;

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.nobel};
  }
`

const Navbar = () => (
  <Nav>
    <Brand>MERN AUTH</Brand>
    <NavItems>
      <li>
        <NavLinkItem to='/' exact>
          Home
        </NavLinkItem>
      </li>
      <li>
        <NavLinkItem to='/login'>Login</NavLinkItem>
      </li>
      <li>
        <NavLinkItem to='/register'>Register</NavLinkItem>
      </li>
    </NavItems>
  </Nav>
)

export default Navbar
