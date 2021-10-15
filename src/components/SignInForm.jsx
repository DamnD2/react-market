import { useContext, useState } from 'react';
import firebase from 'firebase';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { IsLoginModalContext } from '../core/contexts';
import firebaseErrorsMap from '../utils/firebaseErrorsMap';

const useStyles = makeStyles({ field: { marginBottom: '30px' } });

const SignInForm = () => {
  const { isLoginModal, setIsLoginModal } = useContext(IsLoginModalContext);
  const [fieldData, setFieldData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const classes = useStyles();

  const handleClose = () => setIsLoginModal(false);

  const handleChange = ({ target }) => (
    setFieldData((prevState) => (
      { ...prevState, [target.id]: target.value }
    ))
  );

  const signIn = () => {
    const { email, password } = fieldData;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        handleClose();
        setFieldData({ email: '', password: '' });
        setError('');
      })
      .catch((response) => { setError(firebaseErrorsMap[response.code] ?? response.message); });
  };

  return (
    <Dialog open={isLoginModal} onClose={handleClose} align='center' maxWidth='xs' aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Вход</DialogTitle>
      <DialogContent>
        <DialogContentText>Через электронную почту</DialogContentText>
        <TextField
          margin='dense'
          id='email'
          label='Email'
          type='email'
          fullWidth
          color='secondary'
          value={fieldData.email}
          onChange={handleChange}
          className={classes.field}
          variant='outlined'
        />
        <TextField
          margin='dense'
          id='password'
          label='Пароль'
          type='password'
          fullWidth
          color='secondary'
          value={fieldData.password}
          onChange={handleChange}
          className={classes.field}
          variant='outlined'
        />
        <DialogContentText color='error'>{error}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='outlined'>Отмена</Button>
        <Button onClick={signIn} color='secondary' variant='outlined'>Войти</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignInForm;
