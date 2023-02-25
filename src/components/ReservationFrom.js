import { useState } from "react";
import { Container, TextField, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: "10px 0",
  },
  label: {
    textAlign: "center",
  },
});

function ReservationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, date, time });
    // You can add logic here to submit the form data to a server or other service
  };

  return (
    <div>
      <h1>Welcome, </h1>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            required
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            required
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Date"
                fullWidth
                margin="normal"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                InputLabelProps={{
                  shrink: true,
                  className: classes.label,
                }}
                InputProps={{
                  className: classes.input,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Time"
                fullWidth
                margin="normal"
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                InputLabelProps={{
                  shrink: true,
                  className: classes.label,
                }}
                InputProps={{
                  className: classes.input,
                }}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Book Now
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default ReservationForm;
