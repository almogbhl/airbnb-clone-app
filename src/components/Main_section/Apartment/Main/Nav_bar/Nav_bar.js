import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";
import { drawBorder, flexbox } from "../../../../../styled/functions";
import * as c from "../../../../../styled/constants";

class Navbar extends Component {
  render() {
    return (
      <Nav ref="navBar" show={this.props.show}>
        <Box>
          <Item>
            <Button type="button">Overview</Button>
          </Item>
        </Box>
        <Box>
          <Dot> · </Dot>
          <Item>
            <Button type="button">Reviews</Button>
          </Item>
        </Box>
        <Box>
          <Dot> · </Dot>
          <Item>
            <Button type="button">The Host</Button>
          </Item>
        </Box>
        <Box>
          <Dot> · </Dot>
          <Item>
            <Button type="button">Location</Button>
          </Item>
        </Box>
      </Nav>
    );
  }
}

function mapStateToProps(state) {
  const { displayed_list } = state.browse;

  return {
    displayed_list
  };
}

export default connect(mapStateToProps)(Navbar);

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: white;
  display: ${props => (props.show ? "fixed" : "none")};
  align-items: center;
  ${c.border_grey};
    

  @media (min-width: 1028px) {
    justify-content:center;
  }
`;
const Item = styled.span`
  margin-left: 1rem;

 

  &:first-child {
      margin-left: 2.2rem;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;
const Dot = styled.span`
  font-size: 2rem;
  margin-left: 1rem;
  color: ${c.grey};
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${c.blue};
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
