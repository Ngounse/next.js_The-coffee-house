import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { Form, Field } from "react-final-form";
import { LockOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { RenderAutofillInput } from "../../../components/Form/FieldRender";
import { useRouter } from "next/router";
const axios = require("axios");
const SignIn = () => {
  const theme = createTheme();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState<any>("");
  async function onSubmit(fields: any) {
    await axios
      .post("http://127.0.0.1:8000/login-user", fields) //replace route by your own local route
      .then((res: any) => {
        alert("Login success!");
        setErrorMessage("");
        router.push("/");
      })
      .catch((error: any) => {
        setErrorMessage(error.response.data.detail);
      });
  }
  function Copyright(props: any) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://next-js-the-coffee-house.vercel.app/"
        >
          the-coffee-house
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component={"main"} maxWidth={"xs"}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledAvatar sx={{ m: 1, bgcolor: "primary" }}>
            <LockOutlined />
          </StyledAvatar>
          <Typography component={"h1"} variant={"h5"}>
            Sign In
          </Typography>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values, submitting, pristine, form }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  component={RenderAutofillInput}
                  type="email"
                  label="Email"
                  required
                  fullWidth
                  placeholder="Email"
                  margin="normal"
                />
                <Field
                  name="password"
                  component={RenderAutofillInput}
                  type="password"
                  label="Password"
                  required
                  fullWidth
                  placeholder="Password"
                  margin="normal"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Typography component={"span"} sx={{ color: "red" }}>
                  {errorMessage}
                </Typography>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href={"#"} variant="body2">
                      {"Forgot password ?"}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href={"#"} variant="body2">
                      {"Don't have an account ? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </form>
            )}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const StyledAvatar = styled(Avatar)`
  && {
    background-color: #bcaaa4;
  }
`;

export default SignIn;
