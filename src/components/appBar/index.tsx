import * as React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import UserContext from "../../contexts/userContext";

class AppBar extends React.Component<{}, { isOpen: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  public toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  public render() {
    return (
      <UserContext.Consumer>
        {({ resetUser, setUser, user }) => (
          <Navbar color="dark" dark={true} expand="md">
            <NavbarBrand href="/">React's Tutorial</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar={true}>
              <Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink to="/components/" tag={RRNavLink}>
                    Components
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav={true} inNavbar={true}>
                  <DropdownToggle nav={true} caret={true}>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right={true}>
                    <DropdownItem>
                      <Nav
                        to="/dashboard"
                        className="dropdown-item"
                        activeClassName="dropdown-item"
                        tag={RRNavLink}
                      >
                        Dashboard
                      </Nav>
                    </DropdownItem>
                    <DropdownItem>
                      <Nav
                        to="/orderlist"
                        className="dropdown-item"
                        activeClassName="dropdown-item"
                        tag={RRNavLink}
                      >
                        Order List
                      </Nav>
                    </DropdownItem>
                    <DropdownItem divider={true} />
                    <DropdownItem>
                      {user !== null ? (
                        <Nav
                          className="dropdown-item"
                          activeClassName="dropdown-item"
                          tag={RRNavLink}
                          onClick={resetUser}
                          to="/"
                        >
                          Logout
                        </Nav>
                      ) : (
                        <Nav
                          to="/login"
                          className="dropdown-item"
                          activeClassName="dropdown-item"
                          tag={RRNavLink}
                        >
                          Login
                        </Nav>
                      )}
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        )}
      </UserContext.Consumer>
    );
  }
}

export default AppBar;
