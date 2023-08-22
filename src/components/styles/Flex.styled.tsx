import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  align-items: start;
  & > div,
  & > ul {
    flex: 1;
  }
  @media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
