import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Super_host from './Super_host';
import Profile from './Profile';
import About_host from './About_host';
import Safety from './Safety';
import {Section, DivBorder} from "../../../../../styled/styled.components";

class Host_profile extends Component {
  render() {
    return (
      <Section>
        <Profile />
        <DivBorder />
        <Super_host />
        <DivBorder />
        <About_host />
        <DivBorder />
        <Safety />
        <DivBorder />
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

export default connect(mapStateToProps)(Host_profile);
