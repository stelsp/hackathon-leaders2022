import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import { Container, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const SignUpForm = () => {
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
            <Typography level="body2">Sign up to continue.</Typography>
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
          <Button sx={{ mt: 1 }}>Sign up</Button>
          <Typography
            endDecorator={
              <Link component={RouterLink} to="/login">
                Sign in
              </Link>
            }
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Already have login and password?
          </Typography>
        </Sheet>
      </Container>
    </CssVarsProvider>
  );
};

export default SignUpForm;
