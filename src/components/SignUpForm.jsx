import { useContext, useState } from 'react';
import firebase from 'firebase';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { isSignupModalContext, snackbarContext } from '../core/contexts';
import firebaseErrorsMap from '../utils/firebaseErrorsMap';

const useStyles = makeStyles({ field: { marginBottom: '30px' } });

const SignUpForm = () => {
  const { isSignupModal, setIsSignupModal } = useContext(isSignupModalContext);
  const { setSnackbar } = useContext(snackbarContext);
  const [fieldData, setFieldData] = useState({ name: '', password: '' });
  const [error, setError] = useState('');
  const classes = useStyles();

  const handleClose = () => setIsSignupModal(false);

  const handleChange = ({ target }) => (
    setFieldData((prevState) => (
      { ...prevState, [target.id]: target.value }
    ))
  );

  const signUp = () => {
    const { name, password } = fieldData;

    firebase.auth().createUserWithEmailAndPassword(name, password)
      .then(() => {
        handleClose();
        setFieldData({ name: '', password: '' });
        setError('');
        setSnackbar({ isOpen: true, message: 'Регистрация прошла успешно!' });
      })
      .catch((response) => { setError(firebaseErrorsMap[response.code] ?? response.message); });
  };

  return (
    <Dialog open={isSignupModal} onClose={handleClose} align='center' maxWidth='xs' aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Регистрация</DialogTitle>
      <DialogContent>
        <DialogContentText>Через электронную почту</DialogContentText>
        <TextField
          margin='dense'
          id='name'
          label='Email'
          type='email'
          fullWidth
          color='secondary'
          value={fieldData.name}
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
      </DialogContent>
      <DialogContentText color='error'>{error}</DialogContentText>
      <DialogActions>
        <Button onClick={handleClose} variant='outlined'>Отмена</Button>
        <Button onClick={signUp} color='secondary' variant='outlined'>Зарегистрироваться</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpForm;
