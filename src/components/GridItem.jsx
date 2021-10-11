import { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Fab, TextField } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { BasketContext, snackbarContext } from '../core/contexts';
import { addBasketToLocalstorage } from '../utils/basketCalculations';

const useStyles = makeStyles({
  root: { maxWidth: 300 },
  media: { height: 280 },
  btn: {
    marginRight: 10,
    marginLeft: 'auto',
  },
  textfield: { maxWidth: 70 },
});

const GridItem = ({ title, price, description, img }) => {
  const { basket, setBasket } = useContext(BasketContext);
  const { setSnackbar } = useContext(snackbarContext);
  const classes = useStyles();

  const thisGoodsInBasket = basket.find((element) => element.title === title);

  const addItem = () => {
    let newBasket = null;

    if (!thisGoodsInBasket) {
      setSnackbar({ isOpen: true, message: 'Товар добавлен в корзину!' });

      newBasket = [...basket, { title, price, description, img, quantity: 1 }];
    } else {
      newBasket = basket;
    }

    setBasket(newBasket);
    addBasketToLocalstorage(newBasket);
  };

  const increaseQuantityOfGoods = () => {
    const newBasket = basket.map((element) => {
      if (element.title !== title) {
        return element;
      }

      return { ...element, quantity: element.quantity + 1 };
    });

    setBasket(newBasket);
    addBasketToLocalstorage(newBasket);
  };

  const decreaseQuantityOfGoods = () => {
    let newBasket = null;

    if (thisGoodsInBasket.quantity === 1) {
      newBasket = basket.filter((element) => element.title !== title);
    } else {
      newBasket = basket.map((element) => {
        if (element.title !== title) {
          return element;
        }

        return { ...element, quantity: thisGoodsInBasket.quantity - 1 };
      });
    }

    setBasket(newBasket);
    addBasketToLocalstorage(newBasket);
  };

  return (
    <Grid item xs={12} sm={6} md={4} xl={4}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={`${img}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>{title}</Typography>
          <Typography gutterBottom variant='h5' component='p'><b>Цена: {price} BYN</b></Typography>
          <Typography variant='body2' component='p'><b>{description}</b></Typography>
        </CardContent>
        <CardActions>
          {
          thisGoodsInBasket
            ? (
              <>
                <Fab
                  size='small'
                  aria-label='add'
                  onClick={decreaseQuantityOfGoods}
                >
                  <Remove />
                </Fab>
                <TextField
                  size='small'
                  variant='outlined'
                  value={thisGoodsInBasket.quantity}
                  className={classes.textfield}
                />
                <Fab
                  size='small'
                  aria-label='add'
                  onClick={increaseQuantityOfGoods}
                >
                  <Add />
                </Fab>
                <Button
                  size='large'
                  disabled
                  variant='contained'
                  className={classes.btn}
                  onClick={addItem}
                >
                  Купить
                </Button>
              </>
            )
            : (
              <Button
                size='large'
                variant='contained'
                color='secondary'
                className={classes.btn}
                onClick={addItem}
              >
                Купить
              </Button>
            )
          }
        </CardActions>
      </Card>
    </Grid>
  );
};

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default GridItem;
