import React, { Component } from "react";
import styled from "styled-components";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";
import Card from "./Card";

export default class CityBreak extends Component {


  move = (e) => {
    console.dir(this.refs.a);
    // this.refs.a.style.display = "none";

  }


  render() {
    return (
      <Main>
        <Title>Take a city break in Europe</Title>

        <Nav_card>
          <Card ref="a"/>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          <Prev>
            <Link onClick="">&#10094;</Link>
          </Prev>
          <Next>
            <Link onClick={this.move()}>&#10095;</Link>
          </Next>
        </Nav_card>
      </Main>
    );
  }
}

const Main = styled.div`
  color: ${c.grey};
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const Nav_card = styled.div`
  display: flex;
  overflow: hidden;
  width: 90vw;
  position: relative;

  @media (min-width: 694px) {
    width: 94vw;
  }
  @media (min-width: 872px) {
    /* width: 100vw; */
    width: 92vw;
  }
  @media (min-width: 1050px) {
    /* width: 90vw; */
    width: 93vw;
  }
`;
const Prev = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform:translate(-50%, -50%);
  display: flex;
  justify-content:center;
  align-items:center;
  color: black;
  border-radius: 50%;
  user-select: none;
  background-color: white;
  z-index: 99;
`;
const Link = styled.a`
  font-size: 28px;
  padding: 16px;
`;
const Next = styled(Prev)`
  right: -40px;
`;

const Title = styled.h1`
  /* border: 1px solid red;  */
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
