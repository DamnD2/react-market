import { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user] = useAuthState(firebase.auth());

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => firebase.auth().signOut();

  return (
    <div>
      <Button aria-controls='user-menu' aria-haspopup='true' onClick={handleClick}>
        {user.displayName ?? user.email}
        <AccountCircleIcon fontSize='large' />
      </Button>
      <Menu
        id='user-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Выйти</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
