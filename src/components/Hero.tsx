import React from "react";
import { StyledHero, StyledImage } from "./styles/Hero.styled";
import { StyledFlex } from "./styles/Flex.styled";
import { StyledButton } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <StyledFlex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <StyledButton bg="#ff0099" color="#ffffff">
              Get Started For Free
            </StyledButton>
          </div>
          <StyledImage src="./images/illustration-mockups.svg" />
        </StyledFlex>
      </Container>
    </StyledHero>
  );
};

export default Hero;
