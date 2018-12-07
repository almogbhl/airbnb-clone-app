import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";
import * as c from "../../../../../styled/constants";
import Star from "../../Rating/Rating_stars_icon";

class Booking_request extends Component {
  render() {
    return (
      <Main>
        <Info_box>
          <Price_box>
            <Price>₪586</Price>
            <Price_details>per night</Price_details>
          </Price_box>
          <Reviews>
            <Stars_box>
              <Star isActive={true} />
              <Star isActive={true} />
              <Star isActive={true} />
              <Star isActive={true} />
              <Star isActive={true} />
              <Num_stars>197</Num_stars>
            </Stars_box>
          </Reviews>
        </Info_box>
        <Request_box>
          <Button type="button">Request to Book</Button>
        </Request_box>
      </Main>
    );
  }
}

function mapStateToProps(state) {
  const { displayed_list } = state.browse;

  return {
    displayed_list
  };
}

export default connect(mapStateToProps)(Booking_request);

const Main = styled.div`
  
  padding: 2rem 2.5rem;
  background-color: white;
  border-top: 1px solid ${c.lightGrey};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  
  @media (min-width: 1028px) {
  display: none;
}
`;
const Info_box = styled.div``;
const Price_box = styled.div`
color: ${c.grey};`;
const Price = styled.span`
  font-weight: bold;
  font-size: 2.5rem;
`;
const Price_details = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 0.3rem;
`;
const Reviews = styled.div`
color: ${c.grey};`;
const Stars_box = styled.span``;
const Num_stars = styled.span`
  font-size: 1.25rem;
  margin-left: 0.3rem;
  font-weight: bold;
`;
const Request_box = styled.div``;
const Button = styled.button`
    padding: 1.4rem 2.5rem;
    background-color: ${c.red};
    color: white;
    font-weight: bold;
    border: none;
    border-radius: .4rem;
    font-size: 1.6rem;
`;
