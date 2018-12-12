import React, { Component } from "react";
import styled from "styled-components";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";

export default class Card extends Component {
  shouldComponentUpdate = nextProps => {
    const { dir } = nextProps;
    let card = this.refs.box;
    let card_width = card.clientWidth + 15;

    if (dir === "minus") {
      card.style.transform += `translateX(-${card_width}px)`;
    } else if (dir === "plus") {
      card.style.transform += `translateX(${card_width}px)`;
    }

    return true;
  };

  render() {
    return (
      <Box ref="box" src={this.props.img}>
        {/* <Img src={this.props.img} /> */}
        <Content>
          <Title>Amsterdam</Title>
          <Price>₪299/night average</Price>
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
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0,0.5) 100%), url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  
  border-radius: 0.3rem;
  width: 44vw;
  

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
