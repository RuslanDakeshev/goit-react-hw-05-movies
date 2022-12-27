import { NavLink } from "react-router-dom"
import styled from 'styled-components'

export const A = styled(NavLink)`
/* text-decoration: none;
font-size: 18px;
color:blue;

&.active{
    color: red
} */
`;

export const Header = styled.header`
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 30px 0;
  max-width: 100%;
`;


export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const HomeLink = styled(NavLink)`
  display: block;
  margin-right: 30px;
  padding: 8px 14px;
  font-weight: 700;
  font-size: 22px;
  border-radius: 4px;
  transition: all 200ms ease-in-out;
  background-color: var(--accent);
  &.active {
    color: var(--bg);
    background-color: tomato;
    box-shadow: var(--main-shadow);
        outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
 color: var(--bg);
    
    box-shadow: var(--main-shadow);

    box-shadow: 0px 0px 0px 6px var(--accent);
   color: var(--accent);
    background-color: var(--bg);
  }
  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
    
  
  
`;

export const MoviesLink = styled(NavLink)`

`;

export const Item = styled.li`
  position: relative;
  display: inline-block;
  text-decoration: none;
  
 
`;
