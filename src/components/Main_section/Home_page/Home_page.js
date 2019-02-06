import React, { Component } from "react";
import styled from "styled-components";
import Explore from "./Explore/Explore";
import CityBreak from "./City_break/City_break";
import FilteredHomesMain from "./Filtered_homes_types/Main_filtered_homes";

export default class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <Explore />
        <CityBreak />
        <FilteredHomesMain />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 0 2.5rem;

  @media (min-width: 1128px) {
    padding: 0 8rem;
  }
`;
