import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { filterType } from "../Filtered/Filitered.action";

class Card extends Component {
  state = {
    move: 333
  };

  move = () => {
    const index = this.props.index;
    const card = this.refs.box || 333;

    let card_width = card.clientWidth + 15;
    let move = index * card_width;

    return move;
  };

  show_full_list = () => {
    this.props.do_filter_type(this.props.data.name);
  };

  render() {
    const { src, name, average_price } = this.props.data;

    return (
      <Link to={`/homes`}>
        <Box
          onClick={this.show_full_list}
          ref="box"
          move={this.move}
          size={this.props.size}
        >
          <Img src={src} />
          <Gradiant />
          <Content>
            <Title>{name}</Title>
            <Price>{average_price}/Average</Price>
          </Content>
        </Box>
      </Link>
    );
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    do_filter_type: type => dispatch(filterType(type))
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Card)
);

const Box = styled.div`
  margin-right: 1.5rem;
  transform: translateX(-${props => props.move}px);
  transition: transform 0.5s;
  position: relative;

  /* 15px of margin-right,  */
  width: ${props => props.size / 2 - 15}px;

  @media (min-width: 700px) {
    width: ${props => props.size / 3 - 15}px;
  }
  @media (min-width: 900px) {
    width: ${props => props.size / 4 - 15}px;
  }
  @media (min-width: 1128px) {
    width: ${props => props.size / 5 - 15}px;
  }


`;
const Img = styled.img`
  border-radius: 0.3rem;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  min-width: 100%;
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

  width: 100%;
  height: 99%;
  position: absolute;
  top: 0;
  border-radius: 0.3rem;
`;
const Content = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;
const Title = styled.h3`
  font-size: 1.6rem;
`;
const Price = styled.span`
  text-align: center;
  font-size: 1.3rem;
  width: 100%;
`;
