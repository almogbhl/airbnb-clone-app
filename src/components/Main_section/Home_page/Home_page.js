import React, { Component } from "react";
import styled from "styled-components";
import Explore from './Explore/Explore';
import CityBreak from './City_break/City_break';

export default class HomePage extends Component {
  render() {

    return (
        <Wrapper>
            <Explore />
            <CityBreak />
        </Wrapper>
    );
  }
}

const Wrapper = styled.div`
 margin-top: 2rem;
 padding: 0 2.5rem; 

  @media (min-width: 1130px) {
    padding: 0 8rem; 
  }
`;