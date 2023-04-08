import React from "react";
import PropTypes from "prop-types";
import { ButtonsList, Item, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map((el) => (
        <Item key={el}>
          <Button name={el} type="button" onClick={() => onLeaveFeedback(el)}>
            {el}
          </Button>
        </Item>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
