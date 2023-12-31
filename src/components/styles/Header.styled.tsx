import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.colors.header};
  padding: 40px 0;
  
`

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

export const StyledLogo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`