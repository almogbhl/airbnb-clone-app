import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";

class Explore extends Component {


  

  render() {
    const imgs = [
      "https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?aki_policy=large",
    ]
    return (
      <Main>
        <Title>Explore Airbnb</Title>

        <Nav_card>
          <Card type={"Homes"} img={imgs[0]} />
          <Card type={"Experiences"} img={imgs[1]} />
          <Card type={"Restaurants"} img={imgs[2]} />
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
  display: flex;
  height: 13.5rem;
  /* border: 1px solid red; */

  min-width: 500px;

  @media (min-width: 743px) {
    flex-direction: row;

    width: 100%;
  }
  @media (min-width: 940px) {
  }
`;
