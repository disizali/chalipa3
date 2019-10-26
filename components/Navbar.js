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
import axios from "axios";
export default class Navbarclass extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      categories: []
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  async componentDidMount() {
    const { data: categories } = await axios.get(
      "http://95.216.86.208:3000/api/categories"
    );
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <Navbar color="light" light expand="lg" className="rtl shadow-sm text-right">
        <Container>
          <NavbarBrand href="/">
            <img
              src="/static/images/logo.png"
              width="100"
              className="ml-1"
              alt="chalipa logo | لوگو چلیپا"
            />
            <span>چلیپا کابل پویا</span>
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
                  {categories.map((parentItem, index) => {
                    {
                      return (
                        <DropdownItem key={index}>
                          <div>
                            <Link href={`/category/${parentItem.id}`}>
                              <a title={parentItem.title}>{parentItem.title}</a>
                            </Link>
                            <ul>
                              {parentItem.subCategories.map(
                                (childItem, index) => {
                                  return (
                                    <li key={index}>
                                      <Link href={`/category/${childItem.id}`}>
                                        <a className={childItem.title}>
                                          {childItem.title}
                                        </a>
                                      </Link>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </DropdownItem>
                      );
                    }
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link href="/articles">
                  <NavLink href="/articles" title="مقالات">
                    <i className="mx-1 far fa-newspaper"></i>
                    <span className="mx-1">مقالات</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/news">
                  <NavLink href="/news" title="اخبار">
                    <i className="mx-1 fas fa-rss"></i>
                    <span className="mx-1">اخبار</span>
                  </NavLink>
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link href="/gallery">
                  <NavLink href="/gallery">
                    <i className="mx-1 fas fa-images"></i>
                    <span className="mx-1">گالری</span>
                  </NavLink>
                </Link>
              </NavItem> */}
              <NavItem>
                <Link href="/prices">
                  <NavLink href="/prices" title="قیمت سیم و کابل">
                    <i className="mx-1 fas fa-dollar-sign"></i>
                    <span className="mx-1">قیمت سیم و کابل</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about">
                  <NavLink href="/about" title="درباره ما">
                    <i className="mx-1 fas fa-users"></i>
                    <span className="mx-1">درباره ما</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">
                  <NavLink href="/contact" title="تماس با ما">
                    <i className="mx-1 fas fa-phone"></i>
                    <span className="mx-1">تماس با ما</span>
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
