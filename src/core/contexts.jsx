import { createContext } from 'react';

export const BasketContext = createContext({ basket: [], setBasket: () => { } });

export const IsLoginModalContext = createContext({ isLoginModal: false, setIsLoginModal: () => { } });
export const IsSignupModalContext = createContext({ isSignupModal: false, setIsSignupModal: () => { } });

export const SnackbarContext = createContext({ isOpen: false, message: '', setSnackbar: () => { } });
