import React from "react";
import Link from "next/link";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";

export default class Navbarclass extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="light"
          light
          expand="md"
          className="rtl shadow"
          fixed="true"
        >
          <Container>
            <NavbarBrand href="/">
              <img src="/static/images/logo.png" width="100" className="ml-1" />
              <span className="mr-1">چلیپا کابل پویا</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link href="/">
                    <NavLink href="/">صفحه اصلی</NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    محصولات
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link href="/category/1">
                        <a>کابل فشار ضعیف</a>
                      </Link>
                      <ul>
                        <li>
                          <Link href="/category/4">
                            <a>کابل افشان</a>
                          </Link>
                        </li>
                      </ul>
                    </DropdownItem>
                        <DropdownItem>
                          <Link href="/category/1">
                            <a>کابل فشار متوسط</a>
                          </Link>
                          <ul>
                            <li>
                              <Link href="/category/4">
                                <a>نتشیصمیاشصیاشصمعیاشمصعیلشصمیلشمصی</a>
                              </Link>
                            </li>
                          </ul>
                        </DropdownItem>
                        <DropdownItem>
                          <Link href="/category/1">
                            <a>کابل فشار قوی</a>
                          </Link>
                        </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link href="/articles">
                    <NavLink href="/articles">مقالات</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/news">
                    <NavLink href="/news">اخبار</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/gallery">
                    <NavLink href="/gallery">گالری</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/prices">
                    <NavLink href="/prices">لیست قیمت ها</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/about">
                    <NavLink href="/about">درباره ما</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/contact">
                    <NavLink href="/contact">تماس با ما</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}