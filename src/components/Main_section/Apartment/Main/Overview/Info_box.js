import React, { Component } from "react";
import styled from "styled-components";
import house_icon from "../../../../../img/house.png";

class InfoBox extends Component {
  render() {
    const { superhost, guests, beds, bathrooms } = this.props;

    return (
      <Info_box>
        <Icon_box>
          <Icon_img src={house_icon} />
        </Icon_box>
        <Des_box>
          <Info_title>Entire Villa</Info_title>

          <Info_des>{`${guests} guests · ${beds} beds · ${bathrooms} bath`}</Info_des>
        </Des_box>
      </Info_box>
    );
  }
}

export default InfoBox;

const Info_box = styled.div`
  padding-top: 1.5rem;
  display: flex;
`;
const Icon_box = styled.div`
  padding-top: 0.3rem;
  padding-right: 1rem;
  /* border: 1px solid red; */
`;
const Icon_img = styled.img`
  height: 1.2rem;
  width: 1.2rem;
  /* border: 1px solid red; */
`;
const Des_box = styled.div`
  /* border: 1px solid red; */
`;
const Info_title = styled.h2`
  font-size: 1.7rem;
  line-height: 2.2rem;
  vertical-align: top;
`;
const Info_des = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
`;
