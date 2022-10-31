import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const Global = createGlobalStyle`
  ${normalize}

  :root {
    // font
    --ff-primary: 'Roboto', sans-serif;

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

    --page-heading-fs: 2rem;
    --page-heading-fw: var(--fw-600);

    --container-max-width: 1200px;
  }

  body {
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--clr-bg-secondary);
    min-width: 320px;
  }

  b {
    font-weight: var(--fw-600);
    font-size: 1.2rem;

  }
`;

export default Global;
