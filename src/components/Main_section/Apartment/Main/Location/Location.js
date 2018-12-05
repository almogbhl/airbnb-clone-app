import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";
import * as c from "../../../../../styled/constants";
import Neighborhood from './Neighborhood';
import Map from './Map';

class Location extends Component {
  render() {
    return (
      <Section>
        <Neighborhood />
        <Map />
      </Section>
    );
  }
}

function mapStateToProps(state) {
  const { displayed_list } = state.browse;

  return {
    displayed_list
  };
}

export default connect(mapStateToProps)(Location);
