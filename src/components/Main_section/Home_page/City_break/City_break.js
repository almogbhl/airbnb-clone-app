import React, { Component } from "react";
import styled from "styled-components";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";
import Card from "./Card";
import { Europe_images } from "../../../../utils/data/city_break_imgs";

export default class CityBreak extends Component {
  state = {
    direction: "",
    index: 0,
    max_index: 0,
    nav_width: 0,
    prev_visibility: false,
    next_visibility: true
  };

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  updateDimensions = () => {
    let nav = this.refs.Nav_card;
    let card_width = nav.childNodes[0].clientWidth;
    let nav_width = nav.clientWidth;
    const max_index = Europe_images.length - Math.floor(nav_width / card_width);

    this.setState({
      max_index
    });
  };

  nextSlide = () => {
    const index = this.state.index;
    const max_index = this.state.max_index;
    

    this.setState(previousState =>({
      direction: "minus",
      index: previousState.index + 1,
      prev_visibility: true
    }));

    if(index === max_index) {
    this.setState({
      next_visibility: false
    });
    } else {
      this.setState({
        next_visibility: true
      })
    }
    console.log('index: ', index)
    console.log('max_index: ', max_index)
  }
  prevSlide = () => {
    const index = this.state.index;
    const max_index = this.state.max_index;

    this.setState(previousState => ({
      direction: "plus",
      index: previousState.index - 1
    }));


    console.log('index: ', index)
    console.log('max_index: ', max_index)
  }




  move = (e, dir) => {
    let index = this.state.index;
    let max_index = this.state.max_index;
    console.log("index: ", index);
    console.log("max_index: ", max_index);

    if (dir === "minus") {
      this.setState({
        direction: dir,
        index: index + 1,
        prev_visibility: true
      });
    }
    if (dir === "plus") {
      this.setState({
        direction: dir,
        index: index - 1
      });
    }
    if (index < 0) {
      this.setState({
        prev_visibility: false
      });
    }
    if (index === max_index) {
      this.setState({
        next_visibility: false
      });
    }
    if (index < max_index) {
      this.setState({
        next_visibility: true
      });
    }
  };

  render() {
    return (
      <Main>
        <Title>Take a city break in Europe</Title>

        <Nav_card ref="Nav_card">
          {Europe_images.map((item, i) => (
            <Card key={i} dir={this.state.direction} data={item} />
          ))}
        </Nav_card>
        <Prev show={this.state.prev_visibility}>
          <Link onClick={this.prevSlide}>&#10094;</Link>
        </Prev>
        <Next show={this.state.next_visibility}>
          <Link onClick={this.nextSlide}>&#10095;</Link>
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
