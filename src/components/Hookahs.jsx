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

const Hookahs = () => {
  const [hookahs, setHookahs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const db = firebase.database();

    db.ref('hookahs').on('value', (data) => {
      const newHookahs = data.val();

      if (!hookahs.length) {
        setHookahs(newHookahs);
      }
    });
  }, [hookahs]);

  return (
    <Box className={classes.container} mt={5}>
      {
      hookahs.length
        ? <GridOfGoods goods={hookahs} title='Кальяны:' />
        : <CircularProgress color='secondary' />
      }
    </Box>
  );
};

export default Hookahs;
