import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";
import { filterType } from "../Filtered_homes_types/Filitered.action";
import {Link} from 'react-router-dom'

class Card extends Component {
  state = {
    title: "",
    img_src: ""
  };

  componentDidMount = () => {
    const title = this.props.type;
    const img_src = this.props.img;
    this.setState({ title, img_src });
  };
  showApartments = () => {
    this.props.do_filter_type(this.state.title);
  };
  render() {
    return (
      <Link to={`/homes`}>
        <Box onClick={this.showApartments}>
          <Img_box src={this.state.img_src} />
          <Content>
            <Title_box>
              <Title>{this.state.title}</Title>
            </Title_box>
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
  height: 100%;
  max-width: 14.5rem;
  min-width: 14.5rem;
  /* width: calc(33% - .6rem); */
  margin-right: 1rem;
  display: flex;
  flex-basis: 34%;
  flex-direction: column;
  border: 1px solid ${c.lightGrey};
  cursor: pointer;

  @media (min-width: 743px) {
    max-width: 30rem;
    min-width: 16.5rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 70%;
    flex-basis: 50%;
  }
  @media (min-width: 940px) {
  }
`;
const Img_box = styled.div`
  /* border: 1px solid blue; */
  flex-basis: 60%;
  height: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 743px) {
    flex-basis: 40%;
  }
`;
const Content = styled.div`
  /* border: 1px solid blue; */
  flex-basis: 40%;
  @media (min-width: 743px) {
    flex-basis: 60%;
  }
`;
const Title_box = styled.div`
  padding: 1rem;
`;
const Title = styled.span`
  color: ${c.grey};
  font-size: 1.5rem;
  font-weight: bold;
`;
