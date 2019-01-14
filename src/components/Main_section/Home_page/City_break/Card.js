import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import { filterType } from "../Filtered/Filitered.action";


class Card extends Component {
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
        <Box onClick={this.show_full_list} ref="box" move={this.move}>
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
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Card));

const Box = styled.div`
  margin-right: 1.5rem;
  transform: translateX(-${props => props.move}px);
  transition: transform 0.5s;
  position: relative;
 
  width: calc(50vw - 40px);
  

  @media (min-width: 694px) {
    width: calc(34vw - 40px);
  }

  @media (min-width: 872px) {
    width: calc(26vw - 40px);
  }
  @media (min-width: 1128px) {
    width: calc(24vw - 95px)
  }
`;
const Img = styled.img`
  border-radius: 0.3rem;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
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
  height: 100%;
  position: absolute;
  top: 0;
  border-radius: 0.3rem;
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
