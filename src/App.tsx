import * as React from "react";
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

class App extends React.Component<{}, { isOpen: boolean }> {
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
      <div>
        <Navbar color="dark" dark={true} expand="md">
          <NavbarBrand href="/">React's Tutorial</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav={true} inNavbar={true}>
                <DropdownToggle nav={true} caret={true}>
                  Options
                </DropdownToggle>
                <DropdownMenu right={true}>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider={true} />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
