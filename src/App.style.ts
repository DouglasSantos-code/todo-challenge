import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --gray-100: #f2f2f2;
  --gray-200: #d9d9d9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1a1a1a;
  --gray-700: #0d0d0d;
  --purple: #8284fa;
  --purple-dark: #5e60ce;
  --blue: #4ea8de;
  --blue-dark: #1e6f9f;
  --danger: #e25858;

  --ff-sans: "Inter", sans-serif;

  --fw-regular: 400;
  --fw-bold: 700;

  --fs-sm: 0.75rem;
  --fs-md: 0.875rem;
  --fs-base: 1rem;

  --br-1: 0.5rem;
  --br-full: 9999px; 
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd,
ul {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

ul[role="list"],
ol[role="list"] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  color: #fff;
  background: #1A1A1A;
  font-family: var(--ff-sans);
  text-rendering: optimizeSpeed;
  }

  @media only screen and (max-width: 768px) {
  body {
    font-size: var(--fs-md);
  }
}
@media only screen and (max-width: 425px) {
  body {
    font-size: var(--fs-sm);
  }
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  /* scrollbar-color: $gray-300 $gray-500; */
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 0.5rem;
}

*::-webkit-scrollbar-track {
  background: blue;
}

*::-webkit-scrollbar-thumb {
  /* background-color: $gray-300; */
  border-radius: 1rem;
  /* border: 1px solid $gray-700; */
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
`;
