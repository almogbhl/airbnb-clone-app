import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { flexbox } from "../../styled/functions";

import * as c from "../../styled/constants";

class Footer extends Component {
  state = {
    expand: false
  };

  onExpand = () => {
    if (this.state.expand !== true) {
      this.setState({
        expand: true
      });
    }
  };
  onClose = () => {
    if (this.state.expand === true) {
      this.setState({
        expand: false
      });
    }
  };
  render() {
    if (this.state.expand === true) {
      return (
        <Container>
          <Wrapper>
            <HBox>
              <VBox>
                <Title>Airbnb</Title>
                <List>
                  <Item>
                    <Link>Careers</Link>
                  </Item>
                  <Item>
                    <Link>Press</Link>
                  </Item>
                  <Item>
                    <Link>Policies</Link>
                  </Item>
                  <Item>
                    <Link>Help</Link>
                  </Item>
                  <Item>
                    <Link>Diversity & Belonging</Link>
                  </Item>
                </List>
              </VBox>
              <VBox>
                <Title>Discover</Title>
                <List>
                  <Item>
                    <Link>Trust & Safety</Link>
                  </Item>
                  <Item>
                    <Link>Invite Friends</Link>
                  </Item>
                  <Item>
                    <Link>Gift Cards</Link>
                  </Item>
                  <Item>
                    <Link>Airbnb Citizen</Link>
                  </Item>
                  <Item>
                    <Link>Business Travel</Link>
                  </Item>
                  <Item>
                    <Link>Guidebooks</Link>
                  </Item>
                  <Item>
                    <Link>Airbnbmag</Link>
                  </Item>
                  <Item>
                    <Link>Events</Link>
                  </Item>
                </List>
              </VBox>
              <VBox>
                <Title>Hosting</Title>
                <List>
                  <Item>
                    <Link>Why Host</Link>
                  </Item>
                  <Item>
                    <Link>Refer Hosts</Link>
                  </Item>
                  <Item>
                    <Link>Hospitality</Link>
                  </Item>
                  <Item>
                    <Link>Responsible Hosting</Link>
                  </Item>
                  <Item>
                    <Link>Community Center</Link>
                  </Item>
                  <Item>
                    <Link>Host an Experience</Link>
                  </Item>
                  <Item>
                    <Link>Open Homes</Link>
                  </Item>
                </List>
              </VBox>
              <VBox>
                <Title>Airbnb</Title>
                <List>
                  <Item>
                    <Link>Terms</Link>
                  </Item>
                  <Item>
                    <Link>Privacy</Link>
                  </Item>
                  <Item>
                    <Link>Site Map</Link>
                  </Item>
                </List>
              </VBox>
            </HBox>
            <HBox_2>
              <CopyRight_box>
                <Logo_box>
                  <Logo />
                </Logo_box>
                <CopyRight>© Airbnb, Inc.</CopyRight>
              </CopyRight_box>
              <Tools_box>
                <Tool>English</Tool>
                <Tool>ILS - ₪</Tool>
              </Tools_box>
            </HBox_2>
          </Wrapper>
          <Close onClick={this.onClose}>Close</Close>
        </Container>
      );
    } else {
      return (
        <Expand_footer onClick={this.onExpand}>
          Terms, Privacy, Currency & More
        </Expand_footer>
      );
    }
  }
}

export default Footer;

const Expand_footer = styled.div`
  position: fixed;
  bottom: 1.3rem;
  right: 1.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 0.2rem;
  width: 26rem;
  color: ${c.grey};
  cursor: pointer;
  font-size: 1.6rem;
  background-color: white;
  display: none;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 9px 3px;
  @media (min-width: 743px) {
    display: flex;
  }
`;

const Close = styled.div`
  position: absolute;
  bottom: 1.3rem;
  right: 5rem;
  padding: 1rem 3rem;
  border-radius: 0.2rem;
  cursor: pointer;
  background-color: white;
  font-size: 1.6rem;
  align-items: center;
  color: ${c.lighterGrey};
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 9px 3px;

`;

const Container = styled.footer`
  background-color: white;
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 10rem;
  padding: 2rem 2.4rem;
  border-top: 1px solid ${c.lightGrey};
z-index: 999;
  @media (min-width: 743px) {
    height: 37.5rem;
    display: flex;
  }
`;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;
  @media (min-width: 1028px) {
    flex-basis: 70%;
  }
`;
const HBox = styled.div`
    display: none;
  /* border-bottom: 1px solid ${c.lightGrey}; */
  @media (min-width: 743px) {
    flex-basis: 85%;
    display: flex;
  }
`;

const VBox = styled.div`
  margin-right: 7.5rem;
  flex-basis: 22%;
  font-size: 1.4rem;
`;
const Title = styled.h4`
  color: ${c.grey};
  font-weight: bold;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
`;
const Item = styled.li`
  list-style: none;
  margin-top: 0.4rem;
`;
const Link = styled.a`
  cursor: pointer;
  font-weight: bold;
  color: ${c.lighterGrey};
`;
const HBox_2 = styled(HBox)`
  @media (min-width: 743px) {
    margin-bottom: 1.5rem;
    flex-basis: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const CopyRight_box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;
const Logo_box = styled.div`
  margin: 0 1rem;
  height: 2rem;
  width: 2rem;
`;
const Logo = styled.img`
  height: 100%;
  width: 100%;
  background-color: ${c.lighterGrey};
`;
const CopyRight = styled.span`
  font-size: 1.4rem;
  color: ${c.lighterGrey};
`;
const Tools_box = styled.div`
  display: flex;
`;
const Tool = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  color: ${c.lighterGrey};
  margin-right: 1.2rem;
  width: 7rem;
  height: 4rem;
  color: ${c.lighterGrey};
  border: 1px solid ${c.lightGrey};
  padding: 0.4rem 0.8rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${c.lightGrey};
  }
`;
