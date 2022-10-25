import { createGlobalStyle } from "styled-components";
import normalize from "./normalize";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap');
  ${normalize}

  :root {
    // font
    --ff-primary: 'Raleway', sans-serif;

  }

  body {
    font-family: var(--ff-primary);
    min-width: 320px;
  }
`;

export default Global;
