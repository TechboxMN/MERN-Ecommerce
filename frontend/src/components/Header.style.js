import styled from 'styled-components'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

export const DarkNavbar = styled(Navbar)`
    background-color: white;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    i {
        font-size: 20px;
        font-weight: 200;
    }
`

export const NavDropdownUser = styled(NavDropdown)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavbarContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
