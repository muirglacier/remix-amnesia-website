import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default ({ setModal }) => (
  <Nav>
    <AboutLink onClick={() => setModal(prevState => !prevState)}>About</AboutLink>
    <StyledLink to={'https://github.com/muirglacier/remix-amnesia-project.git'}>Github</StyledLink>
    <StyledLink to={'https://github.com/muirglacier/remix-amnesia-desktop/releases/download/0.10.7-dev/Remix.Amnesia.IDE-1.0.8.AppImage'}>Linux</StyledLink>
    <StyledLink to={'https://github.com/muirglacier/remix-amnesia-desktop/releases/download/0.10.7-dev/Remix.Amnesia.IDE-1.0.8.dmg'}>MacOS</StyledLink>

  </Nav>
  
)

const Nav = styled.nav`
  position: absolute;
  top: 3rem;
  right: 3rem;
  z-index: 1;
  display: flex
`

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 700;
`

const AboutLink = styled.a`
  font-size: 1.8rem;
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
  }
`
