import { Box, Typography, Link } from '@material-ui/core';
import React from 'react';
import { LinkedIn, Phone } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  link: { marginRight: 20 },
  text: { marginBottom: 20 },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer style={{ boxShadow: '0px 1px 10px 0px rgb(0 0 0 / 25%)' }}>
      <Box mt={5} padding={3} align='center'>
        <Typography>Material UI React Market © 2021</Typography>
        <br />
        <Typography className={classes.text}>
          Developed by Daineko Vitaly. Contacts: +375 (25) 706-69-65
        </Typography>
        <Link color='secondary' className={classes.link} href='https://www.linkedin.com/in/vitaly-daineko/'><LinkedIn /></Link>
        <Link color='secondary' href='tel: +375257066965'><Phone /></Link>
      </Box>
    </footer>
  );
};

export default Footer;
