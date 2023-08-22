import React from "react";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import Hero from "./components/Hero";
import content from "./Content";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
}; //this creates a theme for the application to use it generally as reusable colors in the project for instance

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header></Header>
      <Hero></Hero>
      <Container>
        <main>
        {content.map((item, index) => {
        return <Card key={index} {...item}/>
      })}
      </main>
      </Container>
      {/*instead of adding classes for global elements, we add the name for the
      component itself, and then create a components folder to add styled to it*/}
      
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default App;
