import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Box, makeStyles, CircularProgress } from '@material-ui/core';
import GridOfGoods from './GridOfGoods';

const useStyles = makeStyles({
  container: {
    minHeight: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Coal = () => {
  const [coal, setCoal] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const db = firebase.database();

    db.ref('coal').on('value', (data) => {
      const newCoal = data.val();

      if (!coal.length) {
        setCoal(newCoal);
      }
    });
  }, [coal]);

  return (
    <Box className={classes.container} mt={5}>
      {
      coal.length
        ? <GridOfGoods goods={coal} title='Уголь для кальяна:' />
        : <CircularProgress color='secondary' />
      }
    </Box>
  );
};

export default Coal;
