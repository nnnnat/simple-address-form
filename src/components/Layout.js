import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import AddressForm from "./AddressForm";

export default function Layout() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={2}>
          <Typography variant="h3" component="h1">
            Address Form
          </Typography>
          <Typography variant="subtitle1">POC using MUI, Formik & Yup</Typography>
          <br />
          <AddressForm />
        </Box>
      </Container>
    </>
  );
}
