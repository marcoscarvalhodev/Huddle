import styled from 'styled-components';

interface Props {
  layout: string;
  divid: number;
}

export const StyledCard = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({layout, divid}) => divid % 2 === 0 && (layout || 'row')};

  div {
    display: flex;
    flex-direction: column;
    
  }

  img {
    width: 80%;
    align-self: ${({divid}) => divid % 2 === 0 ? 'start' : 'end'}
  }

  & > div {
    flex: 1;
  }

  @media(max-width: ${({theme}) => theme.mobile }) {
    flex-direction: column;

  img {
    align-self: start;
  }
  }

  
`