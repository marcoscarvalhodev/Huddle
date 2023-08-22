import React from "react";
import { StyledCard } from "./styles/Card.styled";

type Conteudo = {
  id: number;
  title: string;
  body: string;
  image: string;
};

const Card = ({ id, title, body, image }: Conteudo) => {
  return (
    
    <StyledCard divid={id} layout='row-reverse'>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt=""></img>
      </div>
    </StyledCard>
   
  );
};

export default Card;
