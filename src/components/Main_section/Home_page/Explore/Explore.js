import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";

class Explore extends Component {


  

  render() {
    return (
      <Main>
        <Title>Explore Airbnb</Title>

        <Nav_card>
          <Card />
          <Card />
          <Card />
        </Nav_card>
      </Main>
    );
  }
}
export default Explore
const Main = styled.div`
  /* border: 1px solid black; */
  color: ${c.grey};
`;

const Title = styled.h1`
  /* border: 1px solid red;  */
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
const Nav_card = styled.div`
  /* ${flexbox({ j: "space-between" })}; */
  height: 13.5rem;
  /* border: 1px solid red; */
  max-width: 500px;
  min-width: 500px;

  @media (min-width: 743px) {
    max-width: 100%;
  }
  @media (min-width: 940px) {
  }
`;
