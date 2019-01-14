import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as c from "../../../../../styled/constants";
import RateStar from "../../Rating/rating";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";

class Booking_form extends Component {
  state = {
    focusedInput: "",
    startDate: "",
    endDate: ""
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({ focusedInput });
  };

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    const { price, rating_stars, rating_total } = this.props;
    const amount = Math.round(price);

    return (
      <Main>
        <Price_box>
          <Price>{`₪${amount}`}</Price>
          <Price_detail>per night</Price_detail>
          <Reviews_box>
            <Star>
              <RateStar num={rating_stars} type="AP_main" size="1rem" />
            </Star>
            <Num_stars>{rating_total}</Num_stars>
          </Reviews_box>
        </Price_box>

        <Form>
          <Input_box>
            <Title>Dates</Title>
            <DateRangePicker
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
              focusedInput={focusedInput}
              startDate={startDate}
              endDate={endDate}
            />
          </Input_box>

          <Input_box>
            <Title>Guests</Title>
            <Input type="number" />
          </Input_box>
          <Input_box>
            <Book>Request to Book</Book>
            <Subtitle>You won’t be charged yet</Subtitle>
          </Input_box>
        </Form>
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

export default connect(mapStateToProps)(Booking_form);

const Main = styled.div`

  width: 100%;
  width: 37rem;
  height: 36rem;
  position: sticky;
  top: 8rem;
  right: 0;
  display: none;
  border: 1px solid ${c.lightGrey};
  padding: 0 2.4rem;
  z-index: 2;
  margin-top: 2rem;
  @media (min-width: 1028px) {
    display: flex;
    flex-direction: column;
   
  }
`;

const Price_box = styled.div`
  border-bottom: 1px solid ${c.lightGrey};
  margin: 1rem 0;
  height: 5rem;
  flex-basis: 20%;
`;
const Price_detail = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 0.3rem;
`;
const Price = styled.h2`
  display: inline-block;
  font-size: 2.2rem;
  color: ${c.grey};
  font-weight: 800;
`;

const Reviews_box = styled.div``;
const Star = styled.span`
  margin-right: 0.1rem;
  font-size: 2rem;
  display: inline-block;
`;
const Num_stars = styled.span`
  margin-left: 3px;
  font-size: 1.2rem;
  font-weight: bold;
`;
const Form = styled.div`
  margin-top: 1rem;
`;
const Input = styled.input`
  padding: 1.1rem 2rem;
  font-size: 2rem;
  color: ${c.lighterGrey};
  width: 100%;
  border: 1px solid ${c.lightGrey};
  border-radius: 0.3rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  color: ${c.grey};
  font-weight: bold;
  font-size: 1.2rem;
`;
const Book = styled.button`
  width: 100%;
  background-color: ${c.red};
  color: white;
  font-size: 1.6rem;
  border: none;
  border-radius: 0.3rem;
  font-weight: bold;
  padding: 1rem 1rem;
  height: 4.6rem;
  cursor: pointer;
`;
const Input_box = styled.div`
  margin-bottom: 2rem;
`;
const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  text-align: center;
  color: ${c.grey};
`;
