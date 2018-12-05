import React, { Component } from "react";
import styled from "styled-components";
import RateStar from "../Rating/rating";
import * as c from '../../../../styled/constants';

export default class Apartment extends Component {
  render() {
    const {
      id,
      city,
      street,
      country,
      price,
      coin,
      images,
      rating_stars,
      rating_total
    } = this.props;

    return (
      <Box>
        <ImgBox>
          <Img src={images.preview} />
        </ImgBox>

        <InfoBox>
          <Title>{country}</Title>
          <Sub_title>Stylish Studio in {city} city</Sub_title>
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
  margin-bottom: 2.5rem;
`;

const ImgBox = styled.div`
`;

const Img = styled.img`
  width: 100%;
  border-radius: .4rem;
`;
const InfoBox = styled.div`
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: ${c.darkRed};
  text-transform: uppercase;
`;
const Sub_title = styled.p`
  margin: .3rem 0;
  font-size: 1.6rem;
  color: ${c.grey};
  font-weight: 700;
`;
const H3 = styled.h3`
  font-size: 1.4rem;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: lighter;
  color: ${c.grey};
  line-height: 1.8rem;
`;

const Span = styled.span`
  color: ${c.grey};
  font-weight: 900;
  margin-left: .3rem;
  display: inline-block;
  vertical-align: center;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: normal;
  font-family: "Lato", -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
`;
