import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { theme } from "../../utils";
import { GlobalStyle } from "./GlobalStyle";
import { Footer } from "../../components";

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
