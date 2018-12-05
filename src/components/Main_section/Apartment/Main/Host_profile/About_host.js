import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";
import * as c from "../../../../../styled/constants";

class About_host extends Component {
  render() {
    return (
      <Section>
        <About_box>
          <Des>
            Originally from central west Qld. Spent 10 years overseas mostly as
            an expat in Vanuatu. Now living on the Gold Coast with son, 15 and
            daughter, 3. Playing polocrose for Gold Coast Club and QLD. Sold
            financial planning business to have my daughter. Love champagne
          </Des>
          <InfoBox>
            <Info_type>Languages:</Info_type>
            <Info>English</Info>
          </InfoBox>
          <InfoBox>
            <Info_type>Response rate:</Info_type>
            <Info> 100%</Info>
          </InfoBox>
          <InfoBox>
            <Info_type>Response time:</Info_type>
            <Info>within an hour</Info>
          </InfoBox>
        </About_box>
        <Button>Contact host</Button>
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

export default connect(mapStateToProps)(About_host);

const About_box = styled.div``;
const Des = styled.span``;
const InfoBox = styled.div`
    margin-top: 1.2rem;
`;
const Info_type = styled.span`
    margin-right: .5rem;
`;
const Info = styled.span`
  font-weight: bold;
`;

const Button = styled.button `
    margin-top: 2rem;
    /* width: 10rem; */
    /* height: 2rem; */
    border-radius: .4rem;
    border: .1rem solid ${c.blue};
    background-color: white;
    color: ${c.blue};
    font-weight: bold;
    padding: .8rem 1.7rem;
    font-size: 1.5rem;

`