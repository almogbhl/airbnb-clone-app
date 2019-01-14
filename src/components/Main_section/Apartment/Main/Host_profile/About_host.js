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
            Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus
            aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.
            Nam congue, risus semper porta volutpat, quam pede lobortis ligula,
            sit amet eleifend pede libero quis orci. Nullam molestie nibh in
            lectus. risus semper porta volutpat, quam pede lobortis ligula,
            sit amet eleifend pede libero quis orci. Nullam molestie nibh in
            lectus.
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
  margin-right: 0.5rem;
`;
const Info = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  margin-top: 2rem;
  /* width: 10rem; */
  /* height: 2rem; */
  border-radius: 0.4rem;
  background-color: white;
  color: ${c.blue};
  font-weight: bold;
  padding: 0.8rem 1.7rem;
  border: 0.1rem solid ${c.blue};
  font-size: 1.5rem;
  cursor: pointer;
`;
