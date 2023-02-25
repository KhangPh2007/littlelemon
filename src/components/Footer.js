import * as React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box bgcolor="#2E3B55" color="#FFF" py={3}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" mb={2}>
              About Us
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              hendrerit tellus sit amet sapien tempor, eu feugiat ipsum
              ultricies. Sed varius magna non varius tristique. Praesent in leo
              semper, dignissim orci eget, aliquet velit. Nam quis lectus auctor
              enim rhoncus fermentum.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" mb={2}>
              Links
            </Typography>
            <Typography variant="body1" component="div">
              <Link href="#" color="inherit">
                Home
              </Link>
              <br />
              <Link href="#" color="inherit">
                About
              </Link>
              <br />
              <Link href="#" color="inherit">
                Reservation
              </Link>
              <br />
              <Link href="#" color="inherit">
                Login
              </Link>
              <br />
              <Link href="#" color="inherit">
                Sign Up
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" mb={2}>
              Contact Us
            </Typography>
            <Typography variant="body1">
              1234 Main St
              <br />
              Anytown, USA 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
