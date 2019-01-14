import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as c from "../../../../../styled/constants";

class Safety extends Component {
  render() {
    return (
      <Container>
        <Main_box>
          <Title>Always communicate through Airbnb ·</Title>
          <Des>
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </Des>
          <More>
              Learn More
          </More>
        </Main_box>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { displayed_list } = state.browse;

  return {
    displayed_list
  };
}

export default connect(mapStateToProps)(Safety);
const Container = styled.div `
  /* padding-top: 2.5rem; */
`
const Main_box = styled.div``;
const Title = styled.span`
  font-weight: bold;
`;
const Des = styled.span`
  margin-left: .4rem;
`;
const More = styled(Des) `
    color: ${c.blue};
    font-weight: bold;
    cursor: pointer;
`
