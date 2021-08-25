import { Container, Grid, Card, CardContent, Typography, CardMedia, Button } from '@material-ui/core';

import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import TimeComponent from '../../TimeComponent';
import useStyles from './MainPageStyles';

function MainPage({ Logout }) {

  const classes = useStyles();

  const cards = [
    {
      section: 'Lights',
      imageSrc: 'https://images.unsplash.com/photo-1581532312630-8c6dfd7b4bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3450&q=80'
    },
    {
      section: "Camera's",
      imageSrc: 'https://images.unsplash.com/photo-1549109926-58f039549485?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ]

  const userName = 'Olaf';

  return (
    <BrowserRouter>
      <Container className={classes.cardGrid}>
        <TimeComponent userName={userName}/>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.section} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={card.imageSrc} title="Title"/>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5">{card.section}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4}>
          <Grid item key="button-1" xs={12} sm={6} md={4}>
            <Button onClick={Logout}>Logout</Button>
          </Grid>
        </Grid>
      </Container>
    </BrowserRouter>
  )
}

export default MainPage
