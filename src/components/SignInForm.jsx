import { useContext, useState } from 'react';
import firebase from 'firebase';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import { Facebook, GitHub, Language } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { IsLoginModalContext } from '../core/contexts';
import firebaseErrorsMap from '../utils/firebaseErrorsMap';

const useStyles = makeStyles({
  field: { marginBottom: '30px' },
  google: {
    width: '100%',
    textTransform: 'none',
    fontSize: '16px',
    marginBottom: '10px',
    color: '#fff',
    backgroundColor: '#F56D48',
    '&:hover': { backgroundColor: '#E05029' },
  },
  facebook: {
    width: '100%',
    textTransform: 'none',
    fontSize: '16px',
    marginBottom: '10px',
  },
  github: {
    width: '100%',
    textTransform: 'none',
    fontSize: '16px',
    marginBottom: '30px',
    backgroundColor: 'rgba(0,0,0, .8)',
    color: '#fff',
    '&:hover': { backgroundColor: '#000' },
  },
  icon: { marginRight: 20 },
});

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

  const signInWithEmailAndPassword = () => {
    const { email, password } = fieldData;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        handleClose();
        setFieldData({ email: '', password: '' });
        setError('');
      })
      .catch((response) => setError(firebaseErrorsMap[response.code] ?? response.message));
  };

  const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider)
      .then(() => handleClose());
  };

  const signInWithGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(githubProvider)
      .then(() => handleClose());
  };

  const signInWithFacebook = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(facebookProvider)
      .then(() => handleClose());
  };

  return (
    <Dialog open={isLoginModal} onClose={handleClose} align='center' maxWidth='xs' aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Вход</DialogTitle>
      <DialogContent>
        <Button
          className={classes.google}
          variant='contained'
          onClick={signInWithGoogle}
        >
          <Language fontSize='large' className={classes.icon} />
          Войти через Google
        </Button>
        <Button
          color='secondary'
          className={classes.facebook}
          variant='contained'
          onClick={signInWithFacebook}
        >
          <Facebook fontSize='large' className={classes.icon} />
          Войти через Facebook
        </Button>
        <Button
          className={classes.github}
          variant='contained'
          onClick={signInWithGithub}
        >
          <GitHub fontSize='large' className={classes.icon} />
          Войти через GitHub
        </Button>
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
        <Button onClick={signInWithEmailAndPassword} color='secondary' variant='contained'>Войти</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignInForm;
