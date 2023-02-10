import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

/* $gray-100: hsl(0, 0%, 95%);
$gray-200: hsl(0, 0%, 85%);
$gray-300: hsl(0, 0%, 50%);
$gray-400: hsl(0, 0%, 20%);
$gray-500: hsl(0, 0%, 15%);
$gray-600: hsl(0, 0%, 10%);
$gray-700: hsl(0, 0%, 5%);

$purple: hsl(237, 92%, 75%);
$purple-dark: hsl(239, 53%, 59%);

$blue: hsl(203, 69%, 59%);
$blue-dark: hsl(202, 68%, 37%);

$danger: hsl(0, 80%, 62%);

$ff-sans: "Inter", sans-serif;

$fw-regular: 400;
$fw-bold: 700;

$fs-sm: 0.75rem;
$fs-md: 0.875rem;
$fs-base: 1rem;

$br-1: 0.5rem;
$br-full: 9999px; */

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
  font-family: Open-Sans, Helvetica, Sans-Serif;
  text-rendering: optimizeSpeed;
  }

  @media only screen and (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
@media only screen and (max-width: 425px) {
  body {
    font-size: 12px;
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
