import styled from 'styled-components';

export const StyledHero = styled.section`
background-color: ${({theme}) => theme.colors.header};

& h1 {
  margin: 0;
}

div {
  margin-bottom: 40px;
}
` 

export const StyledImage = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`