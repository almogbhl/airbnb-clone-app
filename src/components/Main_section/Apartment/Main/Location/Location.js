import React, { Component } from "react";
import { connect } from "react-redux";
import { Section } from "../../../../../styled/styled.components";
import Neighborhood from './Neighborhood';
import Map from './Map';

class Location extends Component {
  render() {
    const data = this.props;
    const { lon, lnt } = this.props;
  
    return (
      <Section>
        <Neighborhood {...data} />
        <Map lat={lnt} lon={lon} />
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

