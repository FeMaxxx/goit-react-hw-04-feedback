import styled from "@emotion/styled";

export const List = styled.ul`
  font-size: 20px;
  padding: 20px;

  border: 2px solid aqua;
  border-radius: 50px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Title = styled.p`
  margin-bottom: 5px;
`;

export const Stat = styled.p``;
