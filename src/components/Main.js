import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Dessert1 from "../components/assets/salad.jpg";
import Dessert2 from "../components/assets/bruschetta1.jpg";
import Dessert3 from "../components/assets/creme.jpg";
import {Paper, Grid, ButtonBase} from "@mui/material";
import { styled } from "@mui/material/styles";
import HeroImage from "../components/assets/gourmet.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-content",
    alignItems: "center",
    padding: "50px 0",
    backgroundColor: "#f9f9f9",
  },
  heroImage: {
    maxWidth: 150,
    height: "auto",
  },
    heroText: {
    maxWidth: 150,
    height: "auto",
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#000",
    },

});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const menuItems = [
  {
    id: 1,
    title: "Greek Salad",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    image: Dessert1,
    price: 12.99,
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
    image: Dessert2,
    price: 5.99,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    image: Dessert3,
    price: 5.0,
  },
];

export default function Main() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} columns={16} >
        <Grid item xs={8}>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button>Reserve a Table</Button>
        </Grid>
        <Grid item xs={8}>
          <img
            src={HeroImage}
            alt="serving dish"
            className={classes.heroImage}
          />
        </Grid>
      </Grid>
      <Typography variant="h2" align="center">
        Menu
      </Typography>
      <div className={classes.wrapper}>
        {menuItems.map((menuItem) => (
          <Card className={classes.root} key={menuItem.id}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={menuItem.image}
                title={menuItem.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {menuItem.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {menuItem.description}
                </Typography>
                <Typography variant="h6" component="p">
                  ${menuItem.price.toFixed(2)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
