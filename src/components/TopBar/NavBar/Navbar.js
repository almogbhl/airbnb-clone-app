import React, { Component } from "react";
import styled from "styled-components";
import * as c from '../../../styled/constants';

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Main>
          <Item>
            <Title>Become a host</Title>
          </Item>
          <Item>
            <Title>Saved</Title>
          </Item>
          <Item>
            <Title>Trips</Title>
          </Item>
          <Item>
            <Title>Messages</Title>
          </Item>
          <Item>
            <Title>Help</Title>
          </Item>
          <Item>
            <Title>
              <Avatar src="https://a0.muscache.com/im/pictures/3a022c97-44a4-4878-b6ad-3f60f0f5267c.jpg?aki_policy=profile_x_medium" />
            </Title>
          </Item>
        </Main>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  /* border: 1px solid red; */
  height: 100%;
  display: none;
  color: ${c.lighterGrey};
  /* padding: 1.9rem 0; */

  @media (min-width: 1028px) {
    display: block;
  }
`;
const Main = styled.ul`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7.5rem;
  width: 100%;
`;
const Item = styled.li`
  list-style: none;
  padding: 0 1.6rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:first-child {
      min-width: 13.2rem;
  }
  &:hover {
  border-bottom: 2px solid ${c.lighterGrey};
  }
  `;
const Title = styled.a`

  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 600;
`;
const Avatar = styled.img`
height: 3rem;
width: 3rem;
border-radius: 50%;
`;

export default NavBar;
