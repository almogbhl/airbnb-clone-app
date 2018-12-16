import React, { Component } from "react";
import styled from "styled-components";
import Explore from './Explore/Explore';
import CityBreak from './City_break/City_break';
import Superhost from './Super_host/Super_host';
import TopRated from './Top_rated/Top_rated';
import Filtered from './Filtered/Filtered';



export default class HomePage extends Component {
  render() {

    return (

        <Wrapper>
            <Explore />
            <Filtered type="superHost"/>
            <CityBreak />
            <Filtered type="topRated"/>
            <Filtered type="world"/>
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