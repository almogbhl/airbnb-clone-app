import React, { Component } from "react";
import styled from "styled-components";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";

export default class Card extends Component {
  render() {
    return (
      <Box>
        <Content src="https://a0.muscache.com/im/pictures/998b4270-25d7-4850-8ccf-4350b9a5ab05.jpg?aki_policy=large" />
      </Box>
    );
  }
}

const Box = styled.div`
  /* border: 1px solid ${c.lightGrey}; */
  margin-right: 1.5rem;
  
  `;
const Content = styled.img`
  border-radius: 0.3rem;
  object-fit: cover;
  object-position: center;
  width: 41vw;
  /* height: 40vh; */
  min-width: 21rem;
  min-height: 27rem;

  @media (min-width: 694px) {
    width: 29.5vw;
    min-width: 21rem;
    min-height: 27rem;
  }

  @media (min-width: 872px) {
    width: 22vw;
    min-width: 19rem;
    min-height: 24.5rem;
  }
  @media (min-width: 1050px) {
    width: 17.3vw;

    min-width: 19rem;
    max-width: 33rem;

    min-height: 24.5rem;
    max-height: 42rem;
  }
`;
const Title = styled.h3``;
const Price = styled.span``;
