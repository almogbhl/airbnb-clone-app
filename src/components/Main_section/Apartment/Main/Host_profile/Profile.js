import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";

class Host_profile extends Component {
  render() {
    return (
      <Section>
        <User_box>
          <User_name>Hosted by 'Full-name'</User_name>
          <Info_box>
            <Location>Mount Nathan, Australia ·</Location>
            <Joined>Joined in June 2012</Joined>
          </Info_box>
          <Values_box>
            <Value>
              <Icon />
              319 Reviews
            </Value>
            <Value>
              <Icon />2 References
            </Value>
            <Value>
              <Icon />
              Verified
            </Value>
          </Values_box>
        </User_box>
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

const User_box = styled.div``;
const User_name = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  margin: 1.5rem 0;
`;
const Info_box = styled.div`
  margin-bottom: 1.5rem;
`;
const Location = styled.span``;
const Joined = styled.span`
  margin-left: 3px;
`;
const Values_box = styled.div``;
const Value = styled.span`
  margin-right: 1rem;
`;
const Icon = styled.span``;
