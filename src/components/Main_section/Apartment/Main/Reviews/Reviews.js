import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import RateStar from "../../Rating/Rating_stars_icon";
import Rating_box from "./Rating_box";
import Post from './Post';
import {Section , DivBorder} from '../../../../../styled/styled.components';

class Reviews extends Component {
  render() {
    return (
      <Container>
        <Section>
          <Title_box>
            <Title>197 Reviews</Title>
            <Stars>{<RateStar isBig={true} isActive={true} />}</Stars>
            <Stars>{<RateStar isBig={true} isActive={true} />}</Stars>
            <Stars>{<RateStar isBig={true} isActive={true} />}</Stars>
            <Stars>{<RateStar isBig={true} isActive={true} />}</Stars>
            <Stars>{<RateStar isBig={true} isActive={true} />}</Stars>
          </Title_box>
          <Form>
            <Input type="search" placeholder="Search reviews" />
          </Form>
        </Section>
        <DivBorder />
        <Section>
          <Rating>
            <Rating_box />
            <Rating_box />
            <Rating_box />
            <Rating_box />
            <Rating_box />
            <Rating_box />
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
    flex-wrap:wrap;
    justify-content: space-between;
    }
`;
