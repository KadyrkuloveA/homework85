import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import {useSelector} from "react-redux";
import UserMenu from "./UserMenu";
import AnonymousMenu from "./AnonymousMenu";

const Toolbar = () => {
  const user = useSelector(state => state.users.user);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={RouterNavLink} to="/">LFm</NavbarBrand>

      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/" exact>Artists</NavLink>
        </NavItem>
        {user ? (
            <>
                <NavItem>
                    <NavLink tag={RouterNavLink} to="/track_history" exact>Track History</NavLink>
                </NavItem>
                <UserMenu user={user}/>
            </>
        ) : (
          <AnonymousMenu/>
        )}
      </Nav>
    </Navbar>
  );
};

export default Toolbar;