import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  
`;

export const MovieItem = styled.li`
  width: 210px;
  background-color: #496785;
  border-radius: 5px;
  transition: 0.4s;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
`;

export const MovieLink = styled(Link)`
  object-fit: cover;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  &:hover img {
    filter: grayscale(0);
  }
  &:hover p {
    color: var(--accent);
  }
`;

export const MovieImg = styled.img`
  margin-bottom: 5px;
  filter: grayscale(0.4);
  transition: all 200ms ease-in-out;
`;

export const MovieName = styled.p`
  height: 100%;
  padding: 10px 8px;
  font-weight: 500;
  font-size: 18px;
  transition: all 200ms ease-in-out;
  color: var(--secondary);
`;