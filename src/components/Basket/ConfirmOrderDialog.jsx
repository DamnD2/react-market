import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import firebase from 'firebase';
import { BasketContext, snackbarContext } from '../../core/contexts';

const useStyles = makeStyles({ field: { marginBottom: '30px' } });

const ConfirmOrderDialog = ({ open, setOpen }) => {
  const [error, setError] = useState('');
  const [fieldData, setFieldData] = useState({ name: '', phone: '' });
  const { basket, setBasket } = useContext(BasketContext);
  const { setSnackbar } = useContext(snackbarContext);
  const classes = useStyles();

  const sendOrder = async () => {
    firebase.firestore().collection('orders').add(
      basket.reduce((accum, element) => {
        const result = { ...accum, [element.title]: element.quantity };

        return result;
      }, { '0Name': fieldData.name, '0Phone': fieldData.phone }),
    );
  };

  const handleChange = ({ target }) => (
    setFieldData((prevState) => (
      { ...prevState, [target.id]: target.value }
    ))
  );

  const handleClose = () => setOpen(false);

  const handleConfirmOrder = () => {
    if (!fieldData.name || !fieldData.phone) {
      setError('Заполните все поля.');
    } else {
      setOpen(false);
      setError('');
      setBasket([]);
      sendOrder();
      setSnackbar({ isOpen: true, message: 'Заказ принят! В ближайшее время с вами свяжется оператор!' });
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title' maxWidth='xs'>
        <DialogTitle id='form-dialog-title'>Подтверждение заказа</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Для подтверждения заказа, введите свои контактные данные. В ближайшее время с вами свяжется оператор.
          </DialogContentText>
          <TextField
            margin='dense'
            label='Имя'
            id='name'
            fullWidth
            color='secondary'
            value={fieldData.name}
            className={classes.field}
            onChange={handleChange}
          />
          <TextField
            margin='dense'
            label='Номер телефона'
            id='phone'
            fullWidth
            color='secondary'
            value={fieldData.phone}
            className={classes.field}
            onChange={handleChange}
          />
          <DialogContentText color='error'>{error}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>Отмена</Button>
          <Button onClick={handleConfirmOrder} color='secondary'>Подтвердить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ConfirmOrderDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ConfirmOrderDialog;
