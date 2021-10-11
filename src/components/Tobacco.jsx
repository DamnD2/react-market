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

const Tobacco = () => {
  const [tobaco, setTobaco] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const db = firebase.database();

    db.ref('darkside').on('value', (data) => {
      const newTobaco = data.val();

      if (!tobaco.length) {
        setTobaco(newTobaco);
      }
    });
  }, [tobaco]);

  return (
    <Box className={classes.container} mt={5}>
      {
      tobaco.length
        ? <GridOfGoods goods={tobaco} title='Табак для кальяна:' />
        : <CircularProgress color='secondary' />
      }
    </Box>
  );
};

export default Tobacco;
