import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RateStar from "../Rating/rating";
import * as c from "../../../../styled/constants";
import { filterType } from "../../Home_page/Filtered_homes_types/Filitered.action";
import {Link} from 'react-router-dom'

class Apartment extends Component {

  sendType = () => {
    this.props.do_filter_type('roomMode');
  }

  render() {
    const {
      city,
      country,
      price,
      img,
      rating_stars,
      rating_total,
      room_id
    } = this.props;

    return (
      <Link to={`/rooms/${room_id}`}>
        <Box onClick={this.showApartment} onClick={this.sendType}>
          <ImgBox>
            <Img src={img} />
          </ImgBox>

          <InfoBox>
            <Title>{country}</Title>
            <Sub_title>Stylish Studio in {city} city</Sub_title>
            <H3>{` $${price} per night · Free cancellation`}</H3>
            <RateStar num={rating_stars} type="AP_preview" size="1rem" />
            <Span>{rating_total}</Span>
          </InfoBox>
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
  )(Apartment)
);

const Box = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

const ImgBox = styled.div``;

const Img = styled.img`
  width: 100%;
  border-radius: 0.4rem;
`;
const InfoBox = styled.div``;

const Title = styled.h2`
  font-size: 1.2rem;
  color: ${c.darkRed};
  text-transform: uppercase;
`;
const Sub_title = styled.p`
  margin: 0.3rem 0;
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
  margin-left: 0.3rem;
  display: inline-block;
  vertical-align: center;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: normal;
  font-family: "Lato", -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif !important;
`;
