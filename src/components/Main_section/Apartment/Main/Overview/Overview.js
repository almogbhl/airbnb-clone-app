import React, { Component } from "react";
import styled from "styled-components";

import Gallery from "./Gallery/Gallery";

class Overview extends Component {
  render() {
    return (
      <>
        <Gallery />

        <Summary>
          <Property_type>Entire villa</Property_type>
          <Description>Luxury Gold Coast Hinterland Villa</Description>
          <Host_preview>
            <Host_Location>Mount Nathan</Host_Location>
            <Host_Avatar_box>
              <Host_Avatar src="https://a0.muscache.com/im/pictures/3a022c97-44a4-4878-b6ad-3f60f0f5267c.jpg?aki_policy=profile_x_medium" alt="Kerri-Lea User Profile"
                title="Kerri-Lea User Profile"/>
            </Host_Avatar_box>
          </Host_preview>
        </Summary>
      </>
    );
  }
}

export default Overview;

const Summary = styled.div`
  color: #484848;
  font-family: "Lato", -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue,
    sans-serif;
  word-wrap: break-word;
  border: 1px solid red;
  padding: 24px;
  font-weight: 700;
`;
const Property_type = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: #441a05;
`;
const Description = styled.h1`
  font-size: 32px;
  line-height: 36px;
  font-weight: 800;
  padding: 6px 0;
`;
const Host_preview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Host_Location = styled.div`
  font-size: 20px;
  font-weight: lighter;
`;
const Host_Avatar_box = styled.div``;
const Host_Avatar = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
`;
