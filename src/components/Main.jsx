import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Slider from './Slider/Slider';
import ButtonLink from './ButtonLink/ButtonLink';

const useStyles = makeStyles({
  title: { margin: '30px 0' },
  text: { marginBottom: 30 },
  marginBottom: { marginBottom: 30 },
});

const Main = () => {
  const classes = useStyles();

  return (
    <Box mt={5}>
      <Box display='flex' justifyContent='space-between'>
        <Slider />
        <Box>
          <Typography variant='h4' className={classes.title}>КУПИТЬ КАЛЬЯН В МИНСКЕ</Typography>
          <Typography align='justify' className={classes.text}>Если вы не знаете, как расслабится вечером,
            то мы предлагаем вам посетить наш интернет-магазин кальянов и курительных смесей. Что может
            быть лучше, чем ароматные клубы дыма, которые предварительно фильтруются в чаше? Мы являемся
            официальными дилерами в Беларуси по продаже товаров в табачной отрасли. Наш магазин
            кальянов осуществляет продажу и аренду кальянов в Минске с только сертифицированной
            продукцией, которая порадует пользователей низкой ценой и лучшим качеством.
          </Typography>
          <Typography align='justify'>Купить кальян в интернет-магазине выгодно и просто.
            Оформляйте заказ через корзину либо по указанному номеру телефона. Вас всегда проконсультирует
            опытный сотрудник и подскажет, какое устройство подойдет под ваши параметры. Также
            вы можете обратиться за помощью к нам, если возникнут вопросы и трудности. Мы работаем
            для вас и дарим приятную атмосферу в любом месте.
          </Typography>
        </Box>
      </Box>
      <Typography variant='h4' className={classes.marginBottom}>ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС?</Typography>
      <List className={classes.marginBottom}>
        <ListItem>
          <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
          <ListItemText>Наша фирма <b>9 лет на рынке</b> табачных устройств, поэтому нам доверяют. Специалисты
            колл-центра отлично разбираются в представленных товарах и знают все тонкости данной
            продукции. Мы предлагаем не только приобретение курительного аппарата, но и аренду.
            Доставка кальяна осуществляется в удобное для вас время.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
          <ListItemText><b>Мы бережем свою репутацию.</b> У нас представлены проверенные бренды смесей, устройств
            и их составляющих. Вы можете купить у нас продукцию фирмы Soft Smoke, Pandora, MattPear и др.
            Мы предлагаем различные комплектующие для hookah, поэтому замена нужных вам элементов не будет в тягость.
            Наш магазин любят покупатели и оставляют много положительных отзывов. Мы совершенствуемся и прислушиваемся
            к пожеланиям и предложениям потребителей.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
          <ListItemText><b>Стоимость.</b> У нас минимальные наценки на товары. Наши специалисты устанавливают
            самые приятные ценники на курительные приспособления, чаши, шланги и колбы, чтобы вы могли насладиться
            сладким дымом дома либо на природе в компании друзей.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><FiberManualRecordIcon fontSize='small' /></ListItemIcon>
          <ListItemText><b>Мы растем.</b> Каждый день Hookah Market следит за новинками, и
            самые интересные предложения добавляются в наш каталог. В категориях вы сможете
            найти как неустаревающую классику, так и самые свежие приборы.
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant='h4' className={classes.marginBottom}>Перейти к покупкам: </Typography>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <ButtonLink href='tobaco' imageType='tobaco' />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <ButtonLink href='hookahs' imageType='hookahs' />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <ButtonLink href='coal' imageType='coal' />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
