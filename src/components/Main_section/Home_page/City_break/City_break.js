import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as c from "../../../../styled/constants";
import Card from "./Card";
import CityLoader from "../../../../styled/Loaders/City_loader";

class CityBreak extends Component {
  state = {
    direction: "",
    index: 0,
    max_index: 7,
    nav_width: 0,
    prev_visibility: false,
    next_visibility: true,
    screen_size: 400,
    card_width: 0
  };

  componentWillMount = () => {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  updateScreenSize = () => {
    let screen_size = window.innerWidth;
    if (screen_size >= 1128) {
      screen_size -= 160 - 15; // 160 of padding, 15 of margin-left of last-child
    } else {
      screen_size -= 50 - 15; // 50 of padding
    }

    this.setState({ screen_size });
  };

  updateDimensions = () => {
    this.updateScreenSize();

    let data = this.props.cities_list;
    let nav = this.refs.Nav_card;
    let card_width = nav.childNodes[0].clientWidth;
    let nav_width = nav.clientWidth;
    let max_index = data.length - Math.round(nav_width / card_width) - 1;

    this.setState({
      max_index,
      card_width
    });
  };

  nextSlide = () => {
    this.updateDimensions();

    const index = this.state.index;
    const max_index = this.state.max_index;

    this.setState({
      index: index + 1,
      prev_visibility: true
    });

    // WHEN THE INDEX IS EQUAL TO THE LAST CARD INDEX
    if (index === max_index) {
      this.setState({
        next_visibility: false
      });
    }
  };
  prevSlide = () => {
    const index = this.state.index;
    const max_index = this.state.max_index;

    this.setState({
      index: index - 1
    });

    if (index <= 1) {
      this.setState({
        prev_visibility: false
      });
    }

    if (index > 1) {
      this.setState({
        prev_visibility: true
      });
    }

    if (index > max_index) {
      this.setState({
        next_visibility: true
      });
    }
  };

  render() {
    const { cities_is_loading, cities_list } = this.props || [];
    if (cities_is_loading !== true && cities_list !== undefined) {
      return (
        <Main>
          <Title>Take a city break in Europe</Title>
          <Nav_box>
            <Nav_card draggable="true" ref="Nav_card">
              {cities_list.map((item, i) => (
                <Card
                  key={i}
                  data={item}
                  index={this.state.index}
                  navWidth={this.state.screen_size}
                  cardWidth={this.state.card_width}
                />
              ))}
            </Nav_card>
          </Nav_box>
          <Prev show={this.state.prev_visibility}>
            <Link onClick={this.prevSlide}>&#10094;</Link>
          </Prev>
          <Next show={this.state.next_visibility}>
            <Link onClick={this.nextSlide}>&#10095;</Link>
          </Next>
        </Main>
      );
    } else {
      return (
        <>
          <CityLoader />
        </>
      );
    }
  }
}

function mapStateToProps(state) {
  const { cities_list, cities_is_loading, homes_is_loading } = state.homepage;

  return {
    cities_list,
    cities_is_loading,
    homes_is_loading
  };
}
export default connect(mapStateToProps)(CityBreak);

const Main = styled.div`
  color: ${c.grey};
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
 
`;
const Nav_box = styled.div `
  overflow: scroll;

  [draggable="true"] {
    cursor: move;
  }

  &::-webkit-scrollbar {
    height: 0px;
  }

  @media (min-width: 500px) {
    overflow: hidden;
    [draggable="true"] {
      cursor: auto;
    }
  }
`

const Nav_card = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 694px) {
    overflow: hidden;
  }
`;
const Next = styled.div`
  visibility: ${props => (props.show ? "visible" : "hidden")};
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  top: 55%;
  right: -50px;
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
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
