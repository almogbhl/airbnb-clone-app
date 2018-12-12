import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import RateStar from "../../Rating/rating";
import Rating_box from "./Rating_box";
import Post from "./Post";
import { Section, DivBorder } from "../../../../../styled/styled.components";

class Reviews extends Component {
  render() {
    const {
      rating_stars,
      rating_total,
      rating_acurrancy,
      rating_communication,
      rating_cleanliness,
      rating_location,
      rating_check_in,
      rating_value
    } = this.props;

    return (
      <Container>
        <Section>
          <Title_box>
            <Title>{`${rating_total} Reviews`}</Title>
            <Stars><RateStar num={rating_stars} type="AP_main" size="2rem" /></Stars>
           
          </Title_box>
          <Form>
            <Input type="search" placeholder="Search reviews" />
          </Form>
        </Section>
        <DivBorder />
        <Section>
          <Rating>
            <Rating_box num={rating_acurrancy} type="Acurrancy"/>
            <Rating_box num={rating_communication} type="Communication"/>
            <Rating_box num={rating_cleanliness} type="Cleanliness"/>
            <Rating_box num={rating_value} type="Value"/>
            <Rating_box num={rating_location} type="Location"/>
            <Rating_box num={rating_check_in} type="Check_in"/>
          </Rating>
          <Post_box>
            <Post />
            <DivBorder />
            <Post />
            <DivBorder />
            <Post />
            <DivBorder />
            <Post />
            <DivBorder />
          </Post_box>
        </Section>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { displayed_list } = state.browse;

  return {
    displayed_list
  };
}

export default connect(mapStateToProps)(Reviews);

const Container = styled.div`
  width: 100%;
`;

const Title_box = styled.div``;
const Title = styled.h2`
  margin-right: 10px;
  font-size: 2rem;
  display: inline-block;
`;
const Stars = styled.span`
  margin-left: 3px;
`;
const Form = styled.form`
  margin-top: 25px;
  width: 100%;
`;
const Input = styled.input`
  border-radius: 3px;
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid lightgray;
  padding: 7px;
  padding-left: 30px;
  width: 100%;
  color: #484848;
`;

const Post_box = styled.div`
  display: flex;
  flex-direction: column;
`;
const Rating = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
  @media (min-width: 743px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
