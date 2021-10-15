import { useState, StrictMode, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { BasketContext, IsLoginModalContext, IsSignupModalContext, SnackbarContext } from '../contexts';

const firebaseConfig = {
  apiKey: "AIzaSyC4V6oY-FwQPwUFXg4gH1oF0hEZlo0swYI",
  authDomain: "react-market-77b28.firebaseapp.com",
  databaseURL: "https://react-market-77b28-default-rtdb.firebaseio.com",
  projectId: "react-market-77b28",
  storageBucket: "react-market-77b28.appspot.com",
  messagingSenderId: "222984562458",
  appId: "1:222984562458:web:6349cdf0c6083524762ea3",
};

firebase.initializeApp(firebaseConfig);

const theme = createTheme({
  palette: {
    primary: { main: '#f5f5f5' },
    secondary: { main: '#0072BC' },
  },
  spacing: 8,
});

const Launcher = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isSignupModal, setIsSignupModal] = useState(false);
  const [snackbar, setSnackbar] = useState({ isOpen: false, message: '' });

  useEffect(() => {
    const localStorageBasket = JSON.parse(localStorage.getItem('BASKET'));

    if (localStorageBasket) {
      setBasket(localStorageBasket);
    }
  }, []);

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <BasketContext.Provider value={{ basket, setBasket }}>
          <IsLoginModalContext.Provider value={{ isLoginModal, setIsLoginModal }}>
            <IsSignupModalContext.Provider value={{ isSignupModal, setIsSignupModal }}>
              <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
                {children}
              </SnackbarContext.Provider>
            </IsSignupModalContext.Provider>
          </IsLoginModalContext.Provider>
        </BasketContext.Provider>
      </ThemeProvider>
    </StrictMode>
  );
};

Launcher.propTypes = { children: PropTypes.element.isRequired };

export default Launcher;
