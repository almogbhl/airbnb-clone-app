import React, { Component } from "react";
import styled from "styled-components";
import RateStar from "../Rating/rating";

export default class Apartment extends Component {
  render() {
    const {
      id,
      city,
      street,
      country,
      price,
      coin,
      img,
      rating_stars,
      rating_total
    } = this.props;

    return (
      <Box>
        <ImgBox>
          <Img src={img} />
        </ImgBox>

        <InfoBox>
          <H2>{country}</H2>
          <P>Stylish Studio in {city} city</P>
          <H3>{` ${price}$ per night · Free cancellation`}</H3>
          <RateStar stars={rating_stars}/>
          <Span>{rating_total}</Span>
        </InfoBox>
      </Box>
    );
  }
}

const Box = styled.main`
  display: flex;
  flex-direction: column;
  /* flex: 1 1 auto; */
  margin-bottom: 25px;
`;

const ImgBox = styled.div`
  /* max-width: 743px; */
`;

const Img = styled.img`
  width: 100%;
  border-radius: 4px;
`;
const InfoBox = styled.div`
  /* max-width: 250px; */
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 12px;
  color: #791210;
  text-transform: uppercase;
`;
const P = styled.p`
  margin: 3px 0;
  font-size: 16px;
  color: #484848;
  font-weight: 700;
`;
const H3 = styled.h3`
  margin: 0;
  font-size: 14px;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: lighter;
  color: rgb(72, 72, 72);
  line-height: 18px;
`;

const Span = styled.span`
  color: #484848;
  font-weight: 600;
  margin-left: 3px;
  display: inline-block;
  vertical-align: center;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: normal;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
`;
