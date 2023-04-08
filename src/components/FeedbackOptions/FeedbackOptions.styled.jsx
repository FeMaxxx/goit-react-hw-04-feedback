import styled from "@emotion/styled";

const colors = {
  good: "rgba(0, 128, 0, 0.3)",
  neutral: "rgba(255, 255, 0, 0.3)",
  bad: "rgba(255, 0, 0, 0.3)",
};

const hoverColors = {
  good: "rgba(0, 128, 0, 0.6)",
  neutral: "rgba(255, 255, 0, 0.6)",
  bad: "rgba(255, 0, 0, 0.6)",
};

export const ButtonsList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: space-around;
`;

export const Item = styled.li``;

export const Button = styled.button`
  width: 60px;
  height: 40px;
  color: #fff;

  font-size: 13px;
  background-color: ${(props) => colors[props.name]};
  border: 2px solid aqua;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: ${(props) => hoverColors[props.name]};
  }
`;
