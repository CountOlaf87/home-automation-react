import { Container, Grid, Card, CardContent, Typography, CardMedia, Button } from '@material-ui/core';

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import TimeComponent from '../TimeComponent';
import useStyles from './MainPageStyles';
import { auth, db, logout } from "../../firebase";

function MainPage() {

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);

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

  return (
    <BrowserRouter>
      <Container className={classes.cardGrid}>
        <TimeComponent userName={name}/>
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
        {/* <Grid container spacing={4}>
          <Grid item key="button-1" xs={12} sm={6} md={4}>
            <Button onClick={Logout}>Logout</Button>
          </Grid>
        </Grid> */}
      </Container>
    </BrowserRouter>
  )
}

export default MainPage
