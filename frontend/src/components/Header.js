import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { DarkNavbar, NavbarContainer, NavDropdownUser } from './Header.style'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <>
            <DarkNavbar
                bg='light'
                variant='light'
                expand='lg'
                collapseOnSelect
                className='navbar'
            >
                <NavbarContainer>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img src='/images/logo.png' alt='logo' />
                        </Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Electro</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Route
                            render={({ history }) => (
                                <SearchBox
                                    history={history}
                                    className='searchbox'
                                />
                            )}
                        />
                        <Nav className='ml-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i class='ri-shopping-bag-3-line'></i>
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdownUser
                                    title={<i class='ri-user-6-line'></i>}
                                    id='username'
                                >
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdownUser>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <i class='ri-user-6-line'></i>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdownUser
                                    title={<i class='ri-admin-line'></i>}
                                    id='adminMenu'
                                >
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>
                                            Users
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>
                                            Products
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>
                                            Orders
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/imagelist'>
                                        <NavDropdown.Item>
                                            Images
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdownUser>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </NavbarContainer>
            </DarkNavbar>
        </>
    )
}

export default Header
