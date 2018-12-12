import React, { Component } from "react";
import styled from "styled-components";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";
import Card from "./Card";

export default class CityBreak extends Component {
  state = {
    direction: "",
    index: 0,
    prev_visibility: false,
    next_visibility: true
  };
  

  move = (e, dir) => {
    let index = this.state.index;

    if(index > 6) {
      this.setState({
        index: index - 1
      });
    
    }

    if (dir === "minus") {
      this.setState({
        direction: dir,
        index: index + 1,
        prev_visibility: true
      });
    
    } else if (dir === "plus") {
    
      this.setState({
        direction: dir,
        index: index - 1
      });
    } 

    if(index === 6) {
      this.setState({
        next_visibility: false
      });
      
    } else if (index < 1) {
      this.setState({
        prev_visibility: false,
        next_visibility: true
      });

    } else if(index > 0) {
      this.setState({
        prev_visibility: true,
        next_visibility: true
      });
     
    } 
  };

  render() {
    const Europe_imgs = [
      "https://a0.muscache.com/im/pictures/5447df5a-1d22-4be5-99bb-a24baa3f8870.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/3e724576-8135-47d1-8ed7-737bff8c1065.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/e071ee12-98df-4673-81cc-026d9d3d6685.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/dfce93fe-727a-4b1b-bb98-e8102ec633b3.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/331471e0-b2a9-4233-bd01-1e918b49859e.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/dfce93fe-727a-4b1b-bb98-e8102ec633b3.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/331471e0-b2a9-4233-bd01-1e918b49859e.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/dfce93fe-727a-4b1b-bb98-e8102ec633b3.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/331471e0-b2a9-4233-bd01-1e918b49859e.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg?aki_policy=large"
    ];

    return (
      <Main>
        <Title>Take a city break in Europe</Title>

        <Nav_card ref="Nav_card">
          {Europe_imgs.map((src, i) => (
            <Card key={i} dir={this.state.direction} img={src} />
          ))}
        </Nav_card>
        <Prev show={this.state.prev_visibility}>
          <Link onClick={e => this.move(e, "plus")}>&#10094;</Link>
        </Prev>
        <Next show={this.state.next_visibility}>
          <Link onClick={e => this.move(e, "minus")}>&#10095;</Link>
        </Next>
      </Main>
    );
  }
}

const Main = styled.div`
  color: ${c.grey};
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Nav_card = styled.div`
  display: flex;
  overflow: hidden;
  /* width: 90vw; */

  @media (min-width: 694px) {
    /* width: 94vw; */
  }
  @media (min-width: 872px) {
    /* width: 100vw; */
    /* width: 92vw; */
  }
  @media (min-width: 1050px) {
    /* width: 90vw; */
    /* width: 93vw; */
  }
`;
const Next = styled.div`
  visibility: ${props => (props.show ? "visible" : "hidden")};
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  top: 55%;
  right: -40px;
  transform: translate(-50%, -50%);
  display: none;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 50%;
  user-select: none;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;
  border: 2px solid transparent;
  z-index: 99;

  @media (min-width: 694px) {
    display: flex;
  }
`;
const Link = styled.a`
  font-size: 28px;
  padding: 16px;
`;
const Prev = styled(Next)`
  left: 0px;
  visibility: ${props => (props.show ? "visible" : "hidden")};
`;

const Title = styled.h1`
  /* border: 1px solid red;  */
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
