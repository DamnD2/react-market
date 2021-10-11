import { useContext, useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Box, Typography, Button, Fab, TextField, IconButton } from '@material-ui/core';
import { Add, Remove, Delete } from '@material-ui/icons';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { BasketContext } from '../../core/contexts';
import { totalBasketPrice, addBasketToLocalstorage } from '../../utils/basketCalculations';
import ConfirmOrderDialog from './ConfirmOrderDialog';

const useStyles = makeStyles({
  img: { width: 130, height: 130 },
  tablerow: { padding: 20 },
  goback: { color: '#0072BC', textDecoration: 'underline', cursor: 'pointer', marginBottom: 20 },
  totalCost: { padding: 20 },
  field: { marginRight: 30 },
  textfield: { maxWidth: 50 },
  title: { maxWidth: 600 },
  quantity: { minWidth: 170 },
  quantityButton: { margin: '0 10px' },
  container: { minHeight: '70vh' },
});

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const [isConfirmDialog, setIsConfirmDialog] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    setIsConfirmDialog(true);
  };

  const increaseQuantityOfGoods = ({ title, quantity }) => {
    const newBasket = basket.map((element) => {
      if (element.title !== title) {
        return element;
      }

      return { ...element, quantity: quantity + 1 };
    });

    setBasket(newBasket);
    addBasketToLocalstorage(newBasket);
  };

  const decreaseQuantityOfGoods = ({ title, quantity }) => {
    const newBasket = basket.map((element) => {
      if (element.title !== title) {
        return element;
      }

      return { ...element, quantity: quantity - 1 };
    });

    setBasket((prevState) => {
      if (quantity === 0) {
        return prevState;
      }

      return newBasket;
    });

    addBasketToLocalstorage(newBasket);
  };

  const removeItem = ({ title }) => {
    const newBasket = basket.filter((element) => element.title !== title);

    setBasket(newBasket);
    addBasketToLocalstorage(newBasket);
  };

  return (
    <Box className={classes.container} mt={5}>
      {basket.length
        ? (
          <>
            <Typography gutterBottom variant='h6' onClick={() => history.goBack()} className={classes.goback}>
              &#10229; Вернуться к покупкам
            </Typography>
            <TableContainer component={Paper}>
              <Table size='small' aria-label='a dense table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Фото товара</TableCell>
                    <TableCell align='left'>Товар</TableCell>
                    <TableCell align='center'>Количество</TableCell>
                    <TableCell align='center'>Цена за 1шт.</TableCell>
                    <TableCell align='center' />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {basket.map((element) => (
                    <TableRow key={element.title}>
                      <TableCell align='center'><img className={classes.img} src={element.img} alt='img' /></TableCell>
                      <TableCell align='left' className={classes.title}>
                        <Typography variant='h6'>{element.title}</Typography>
                        <Typography>{element.description}</Typography>
                      </TableCell>
                      <TableCell className={classes.quantity} align='center'>
                        <Fab
                          size='small'
                          className={classes.quantityButton}
                          onClick={() => decreaseQuantityOfGoods(element)}
                        >
                          <Remove />
                        </Fab>
                        <TextField size='small' variant='outlined' value={element.quantity} className={classes.textfield} />
                        <Fab
                          size='small'
                          className={classes.quantityButton}
                          onClick={() => increaseQuantityOfGoods(element)}
                        >
                          <Add />
                        </Fab>
                      </TableCell>
                      <TableCell align='center'>{element.price} BYN</TableCell>
                      <TableCell align='center'>
                        <IconButton onClick={() => removeItem(element)}><Delete /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant='h5' align='right' className={classes.totalCost}>
              Общая стоимость:<b>{totalBasketPrice(basket)} BYN</b>
            </Typography>
            <Box align='right' mb={5}>
              <Button variant='contained' color='secondary' onClick={handleClick}>Оформить заказ</Button>
            </Box>
          </>
        )
        : (
          <>
            <Typography gutterBottom variant='h6' component='h2'>Ваша коризна пуста</Typography>
            <Typography gutterBottom variant='h6' onClick={() => history.goBack()} className={classes.goback}>
              &#10229; Вернуться к покупкам
            </Typography>
          </>
        )}
      <ConfirmOrderDialog open={isConfirmDialog} setOpen={setIsConfirmDialog} />
    </Box>
  );
};

export default Basket;
