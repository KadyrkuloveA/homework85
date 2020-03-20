import React from 'react';
import {DropdownToggle, UncontrolledDropdown} from "reactstrap";

const UserMenu = ({user}) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
          {user.username}
      </DropdownToggle>
    </UncontrolledDropdown>
  );
};

export default UserMenu;