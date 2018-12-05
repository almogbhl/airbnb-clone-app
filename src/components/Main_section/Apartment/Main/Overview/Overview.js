import React, { Component } from "react";
import styled from "styled-components";
import InfoBox from "./Info_box";
import Space from "./Space";
import { Section, DivBorder } from "../../../../../styled/styled.components";
import * as fun from "../../../../../styled/functions";
import * as c from "../../../../../styled/constants";

class Overview extends Component {
  render() {
    return (
      <Section>
        <Summery_Box>
          <Sub_title>Entire villa</Sub_title>
          <Main_title>Luxury Gold Coast Hinterland Villa</Main_title>
          <Host_box>
            <Host_Location>Mount Nathan</Host_Location>
            <Avatar_box>
              <Avatar_img
                src="https://a0.muscache.com/im/pictures/3a022c97-44a4-4878-b6ad-3f60f0f5267c.jpg?aki_policy=profile_x_medium"
                alt="Kerri-Lea User Profile"
                title="Kerri-Lea User Profile"
              />
            </Avatar_box>
          </Host_box>
        </Summery_Box>
        <Info_main>
          <InfoBox />
          <InfoBox />
        </Info_main>
        <DivBorder />
        <Space />
        <Contact>Contact host</Contact>
        <DivBorder />
      </Section>
    );
  }
} 

export default Overview;

const Summery_Box = styled.div`
  /* border: 1px solid tomato; */
  margin-top: 2rem;
`;
const Sub_title = styled.span`
  text-transform: uppercase;
  font-size: 1.3rem;
  line-height: 1rem;
  color: ${c.darkOrange};
`;
const Main_title = styled.h1`
  font-size: 3.2rem;
  line-height: 3.6rem;
  font-weight: 800;
  padding: 0.6rem 0;
`;
const Host_box = styled.div`
  ${fun.flexbox({ j: "space-between" })}
`;
const Host_Location = styled.div`
  font-size: 1.5rem;
`;
const Avatar_box = styled.div``;
const Avatar_img = styled.img`
  border-radius: 50%;
  height: 4.8rem;
  width: 4.8rem;
`;
const Info_main = styled.div`
  width: 100%;
`;
const Contact = styled.span`
  color: ${c.blue};
  font-weight: bold;
  font-size: 1.7rem;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${c.blue};
  }
`;
