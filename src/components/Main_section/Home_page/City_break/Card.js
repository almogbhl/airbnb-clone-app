import React, { Component } from "react";
import styled from "styled-components";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";

export default class Card extends Component {
  // componentDidMount = () => {
  //   window.addEventListener("resize", this.updateDimensions);
  // };
  // componentWillUnmount = () => {
  //   window.removeEventListener("resize", this.updateDimensions);
  // };

  // updateDimensions = () => {
  //   const { dir } = this.props;
  //   let card = this.refs.box;
  //   let card_width = card.clientWidth + 15;
  //   console.log(card_width);

  //   if (dir === "minus") {
  //     card.style.transform += `translateX(-${card_width}px)`;
  //   } else if (dir === "plus") {
  //     card.style.transform += `translateX(${card_width}px)`;
  //   }
  // };

  shouldComponentUpdate = nextProps => {
    const { dir } = nextProps;
    let card = this.refs.box;
    let card_width = card.clientWidth + 15;
    // console.log(card_width);

    if (dir === "minus") {
      card.style.transform += `translateX(-${card_width}px)`;
    } else if (dir === "plus") {
      card.style.transform += `translateX(${card_width}px)`;
    }

    return true;
  };

  render() {
    const { src, name, average_price } = this.props.data;
    return (
      <Box ref="box">
        <Img src={src} />
        <Gradiant />
        <Content>
          <Title>{name}</Title>
          <Price>{average_price}</Price>
        </Content>
      </Box>
    );
  }
}

const Box = styled.div`
  /* border: 1px solid ${c.lightGrey}; */
  margin-right: 1.5rem;
  transition: transform .5s;
  position: relative;
  
  `;
const Img = styled.img`
  border-radius: 0.3rem;
  object-fit: cover;
  object-position: center;
  width: 44vw;

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
  @media (min-width: 1128px) {
    width: 15.3vw;

    min-width: 18rem;
    max-width: 33rem;

    min-height: 21.5rem;
    max-height: 42rem;
  }
`;
const Gradiant = styled.div`
  background: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0.1) 38%,
    rgb(0, 0, 0, 0.4) 56%
  );
  background: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 3%,
    rgb(0, 0, 0, 0.5) 100%
  );
  /* background-color: black; */
  /* border:1px solid red; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;
const Content = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  /* border: 1px solid red; */
  color: white;
  /* background-color: rgba(0,0,0,0.3);  */
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  /* border: 1px solid red; */
`;
const Title = styled.h3`
  font-size: 1.6rem;
`;
const Price = styled.span`
  text-align: center;
  font-size: 1.3rem;
  width: 100%;
`;
