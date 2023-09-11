import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

body {
  letter-spacing: 0.03em;
  color: #9072AF;
  margin: 0;
  font-family: 'Cormorant', serif;
/* font-family: 'Montserrat', sans-serif; */
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0;
}

button {
  border: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  color: #9072af;
}
`;

export default GlobalStyle;
