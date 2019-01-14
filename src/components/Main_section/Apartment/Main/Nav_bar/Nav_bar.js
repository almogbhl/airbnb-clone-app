import React, { Component } from "react";
import { connect } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import * as c from "../../../../../styled/constants";

class Navbar extends Component {
  scrollTo = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Nav show={this.props.show}>
        <Box>
          <Item>
            <Link smooth to={`/rooms/${this.props.roomid}/#overview`}>
              <Button onClick={this.scrollTo} type="button">
                Overview
              </Button>
            </Link>
          </Item>
        </Box>
        <Box>
          <Dot> · </Dot>
          <Item>
            <Link smooth to={`/rooms/${this.props.roomid}/#reviews`}>
              <Button onClick={this.scrollTo} type="button">
                Reviews
              </Button>
            </Link>
          </Item>
        </Box>
        <Box>
          <Dot> · </Dot>
          <Item>
            <Link smooth to={`/rooms/${this.props.roomid}/#profile`}>
              <Button onClick={this.scrollTo} type="button">
                The Host
              </Button>
            </Link>
          </Item>
        </Box>
        <Box>
          <Dot> · </Dot>
          <Item>
            <Link smooth to={`/rooms/${this.props.roomid}/#location`}>
              <Button onClick={this.scrollTo} type="button">
                Location
              </Button>
            </Link>
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
  z-index: 10;
  ${c.border_grey};

  @media (min-width: 743px) {
    justify-content: center;
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
