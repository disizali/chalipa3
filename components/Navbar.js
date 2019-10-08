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

import categories from "../static/data/categories";
const categoriesArray = Object.values(categories);

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
          expand="lg"
          className="rtl shadow-sm"
          fixed="true"
        >
          <NavbarBrand href="/">
            <img src="/static/images/logo.png" width="100" className="ml-1" />
            <span className="mr-1">چلیپا کابل پویا</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link href="/">
                    <NavLink href="/">
                      <i className="mx-1 fas fa-home"></i>
                      <span className="mx-1">صفحه اصلی</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <i className="mx-1 fas fa-list"></i>
                    <span className="mx-1">محصولات</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    {categoriesArray.map((item1, index) => {
                      {
                        return item1.parentCategory != undefined ? (
                          ""
                        ) : (
                          <DropdownItem key={index}>
                            <div>
                              <Link href={`/category/${item1.id}`}>
                                <a>{item1.title}</a>
                              </Link>
                              {categoriesArray.some(
                                item => item.id == item1.id
                              ) ? (
                                <ul>
                                  {categoriesArray.map((item2, index) => {
                                    return item2.parentCategory == item1.id ? (
                                      <li key={index}>
                                        <Link href={`/category/${item2.id}`}>
                                          <a>{item2.title}</a>
                                        </Link>
                                      </li>
                                    ) : (
                                      ""
                                    );
                                  })}
                                </ul>
                              ) : (
                                ""
                              )}
                            </div>
                          </DropdownItem>
                        );
                      }
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link href="/articles">
                    <NavLink href="/articles">
                      <i className="mx-1 far fa-newspaper"></i>
                      <span className="mx-1">مقالات</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/news">
                    <NavLink href="/news">
                      <i className="mx-1 fas fa-rss"></i>
                      <span className="mx-1">اخبار</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/gallery">
                    <NavLink href="/gallery">
                      <i className="mx-1 fas fa-images"></i>
                      <span className="mx-1">گالری</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/prices">
                    <NavLink href="/prices">
                      <i className="mx-1 fas fa-dollar-sign"></i>
                      <span className="mx-1">لیست قیمت ها</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/about">
                    <NavLink href="/about">
                      <i className="mx-1 fas fa-users"></i>
                      <span className="mx-1">درباره ما</span>
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/contact">
                    <NavLink href="/contact">
                      <i className="mx-1 fas fa-phone"></i>
                      <span className="mx-1">تماس با ما</span>
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
