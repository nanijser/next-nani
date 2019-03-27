import React from "react";
import Wrapper from "./Wrapper";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default ({ children }) => (
  <Wrapper>
    <header>
      <Nav />
    </header>

    <main>{children}</main>

    <Footer>Footer</Footer>
  </Wrapper>
);
