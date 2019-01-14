import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";

class Host_profile extends Component {
  render() {
    return (
      <Section>
        <SuperHost_box show={this.props.show}>
          <Title>'Full-name' is Superhost ·</Title>
          <Des>
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </Des>
        </SuperHost_box>
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

const SuperHost_box = styled.div`
  display: ${props => (props.show ? "block" : "none")};
`;
const Title = styled.span`
  font-weight: bold;
`;
const Des = styled.span`
  margin-left: 3px;
`;
