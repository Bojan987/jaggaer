import styled from "@emotion/styled";
import React from "react";
import iconStar from "../../resources/icons/star-filled.svg";
import iconEmptyStar from "../../resources/icons/star.svg";

const StarStyled = styled("img")({
  height: "1.5rem",
});

const StarContainer = styled("span")({
  margin: "1.5rem 1rem 1rem 0",
});

const Rating = ({ value }) => {
  const emptyStars = 5 - value * 1;

  return (
    <StarContainer>
      {[...Array(value * 1).keys()].map((star) => (
        <StarStyled src={iconStar} key={star} />
      ))}
      {[...Array(emptyStars).keys()].map((star) => (
        <StarStyled src={iconEmptyStar} key={star} />
      ))}
    </StarContainer>
  );
};

export default Rating;
