import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const Global = createGlobalStyle`
  ${normalize}

  :root {
    // font
    --ff-primary: monospace, sans-serif;

    // colors
    --clr-primary: lightgrey;
    --clr-secondary: white;

    --clr-bg-primary: var(--clr-primary);
    --clr-bg-secondary: var(--clr-secondary);

    // font-weight
    --fw-300: 300;
    --fw-400: 400;
    --fw-500: 500;
    --fw-600: 600;
    --fw-700: 700;
    --fw-800: 800;
  }

  body {
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--clr-bg-primary);
    min-width: 320px;
  }
`;

export default Global;
