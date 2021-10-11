import { createContext } from 'react';

export const BasketContext = createContext({ basket: [], setBasket: () => { } });

export const isLoginModalContext = createContext({ isLoginModal: false, setIsLoginModal: () => { } });
export const isSignupModalContext = createContext({ isSignupModal: false, setIsSignupModal: () => { } });

export const snackbarContext = createContext({ isOpen: false, message: '', setSnackbar: () => { } });
