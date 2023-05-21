import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #4c4c4c;
  border-radius: 6px;
  &:hover {
    color: #292929;
    background-color: tomato;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 275px;
`;

export const DetailContainer = styled.div``;

export const MovieTitle = styled.h2`
  font-size: 36px;
`;

export const PartTitle = styled.h3`
  margin-top: 32px;
`;

export const Text = styled.p`
  margin-top: 12px;
`;
