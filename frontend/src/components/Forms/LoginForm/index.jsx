import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import { Link as RouterLink } from "react-router-dom";
import { Container, Link } from "@mui/material";

const LoginForm = () => {
  return (
    <CssVarsProvider>
      <Container maxWidth="xl">
        <Sheet
          sx={{
            maxWidth: 500,
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <TextField
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <Button sx={{ mt: 1 }}>Log in</Button>
          <Typography
            endDecorator={
              <Link component={RouterLink} to="/sign_up">
                Sign up
              </Link>
            }
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </Container>
    </CssVarsProvider>
  );
};

export default LoginForm;
