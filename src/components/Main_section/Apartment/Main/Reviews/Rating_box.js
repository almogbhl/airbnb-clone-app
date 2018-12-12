import React, { Component } from "react";
import styled from "styled-components";
import RateStar from "../../Rating/rating";

class Rating_box extends Component {
  render() {
    const { type, num } = this.props;

    return (
      <Container>
        <Rating_type>{type}</Rating_type>
        <Stars_box>
          <Star>
            <RateStar num={num} type="AP_main" size="1.5rem" />
          </Star>
        </Stars_box>
      </Container>
    );
  }
}

export default Rating_box;

const Container = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px solid red; */
  @media (min-width: 743px) {
    width: calc(50% - 2rem);
  }
`;
const Rating_type = styled.p`
  font-size: 1.7rem;
  color: #484848;
`;
const Stars_box = styled.div`
  /* border: 1px solid red; */
  display: flex;

  @media (min-width: 743px) {
  }
`;
const Star = styled.div`
  margin-left: 0.5rem;
`;
