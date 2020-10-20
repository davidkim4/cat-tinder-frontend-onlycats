import React, { Component, useState } from 'react';
import {
    Collapse,
    Jumbotron,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

// export default class Header extends Component {
const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    // render() {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">OnlyCats</h1>
                    <p className="lead">This is a site that only has cats on it... WHAT ELSE WERE YOU EXPECTING?!</p>
                    <Navbar color="faded" light>
                        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </Jumbotron>
        </div>
    );
};
export default Header;
//     }
// }