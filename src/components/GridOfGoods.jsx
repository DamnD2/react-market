import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem';

const GridOfGoods = ({ goods, title }) => (
  <Container>
    <Typography variant='h4'>{title}</Typography>
    <br />
    <Grid container spacing={3} aling='center'>
      {
        goods.map((element) => (
          <GridItem
            key={element.id}
            title={element.title}
            description={element.description}
            price={element.price}
            img={element.img}
          />
        ))
      }
    </Grid>
  </Container>
);

GridOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default GridOfGoods;
