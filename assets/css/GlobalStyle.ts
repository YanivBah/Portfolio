import { createGlobalStyle, ThemeProps } from "styled-components";
import { LanguageLocale } from "../../config/constants";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: inherit;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: ${(props: ThemeProps<typeof baseTheme>) =>
    props.theme.colors.background};
}

main {
  display: block;
}

h1 {
  font-size: 2em;
}

hr {
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}


small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
}

button,
input {
  overflow: visible;
}


button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

legend {
  color: inherit;
  display: table;
  max-width: 100%;
  white-space: normal;
}


progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

`;

const baseTheme = {
  colors: {
    primary: "#72BDA3",
    primaryDark: "#507972",
    primaryLight: "#89BEAD",
    typography: "#2e3440",
    background: "#eceff4",
    backgroundDark: "#DBDEE4",
    backgroundLight: "#F4F5FA",
  },
};

const ltrTheme = {
  ...baseTheme,
  flex: {
    direction: "row",
  },
};

const rtlTheme = {
  ...baseTheme,
  flex: {
    direction: "row-reverse",
  },
};

const theme = (languageLocale: LanguageLocale) => {
  if (languageLocale === LanguageLocale.Hebrew) return rtlTheme;
  return ltrTheme;
};

export { GlobalStyle, theme };
