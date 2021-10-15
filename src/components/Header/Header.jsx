import { useContext, useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Tab, Tabs, Box, IconButton, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase';
import { IsLoginModalContext, IsSignupModalContext, BasketContext } from '../../core/contexts';
import UserMenu from './UserMenu';
import { totalBasketPrice, quantityOfGoodsInBasket } from '../../utils/basketCalculations';

const useStyles = makeStyles({
  login: { marginRight: 5 },
  basket: { marginRight: 20 },
});

const pathnameMap = {
  '/': 1,
  '/tobaco': 2,
  '/hookahs': 3,
  '/coal': 4,
};

const Header = () => {
  const [tabValue, setTabValue] = useState(1);
  const { setIsLoginModal } = useContext(IsLoginModalContext);
  const { setIsSignupModal } = useContext(IsSignupModalContext);
  const { basket } = useContext(BasketContext);
  const [user] = useAuthState(firebase.auth());
  const classes = useStyles();

  const handleChangeTabs = (event, newValue) => setTabValue(newValue);

  const history = useHistory();

  useEffect(() => {
    const { pathname } = history.location;

    setTabValue(pathnameMap[pathname]);
  }, [history]);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Box mr={2} flexGrow={1}>
          <Typography variant='h6'>
            HOOKAH MARKET
          </Typography>
        </Box>
        <Box flexGrow={10}>
          <Tabs value={tabValue} onChange={handleChangeTabs}>
            <Tab value={1} label='Главная' component={Link} to='/' />
            <Tab value={2} label='Табак' component={Link} to='/tobaco' />
            <Tab value={3} label='Кальяны' component={Link} to='/hookahs' />
            <Tab value={4} label='Уголь' component={Link} to='/coal' />
          </Tabs>
        </Box>
        <Typography>{totalBasketPrice(basket)} BYN</Typography>
        <IconButton className={classes.basket} component={Link} to='/basket'>
          <Badge color='error' badgeContent={quantityOfGoodsInBasket(basket)}><ShoppingCartIcon /></Badge>
        </IconButton>
        {
        user
          ? <UserMenu />
          : (
            <>
              <Button className={classes.login} variant='outlined' onClick={() => setIsLoginModal(true)}>Войти</Button>
              <Button variant='outlined' color='secondary' onClick={() => setIsSignupModal(true)}>Регистрация</Button>
            </>
          )
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
