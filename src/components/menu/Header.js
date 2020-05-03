import React, { Component } from "react";
import { Route, Link } from 'react-router-dom'
const menus = [{
  name: "Home",
  to: "/",
  exact: true
},
{
  name: "Product-List",
  to: "/product-list",
  exact: false
},
{
  name: "Product-Action",
  to: "/product/add",
  exact: false
}]

const MenuLink = ({ to, label, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : ""
        return <li className="nav-item">
          <Link to={to} className={`nav-link ${active}`}>{label}</Link>
        </li >
      }}

    />
  )
}
class Header extends Component {


  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <ul className="nav nav-tabs">
            {this.showMenuLink(menus)}
          </ul>
        </nav>
      </div>
    )
  }
  showMenuLink = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((link, index) => {
        return <MenuLink
          key={index}
          to={link.to}
          label={link.name}
          activeOnlyWhenExact={link.exact}
        />
      })
    }
    return result;
  }
}
export default Header