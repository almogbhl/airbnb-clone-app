import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";
import * as c from "../../../../../styled/constants";

class Neighborhood extends Component {
  render() {
    return (
     
        <Main_box>
          <Title>The neighborhood</Title>
          <Des>
            Kerri-Lea’s home is located in Mount Nathan, Queensland, Australia.
          </Des>
          {/* <Des>
            The serenity and privacy is second to none. So very close to the
            pristine Gold Coast beaches, 25min but yet you feel like you are
            hours away. We are close to Mount Tambourine and only 4.9km from the
            gates of Outback spectacular and Movie World.
          </Des> */}
          {/* <More>
          Read more about the neighborhood
          </More> */}
        </Main_box>

    );
  }
}

function mapStateToProps(state) {
  const { displayed_list } = state.browse;

  return {
    displayed_list
  };
}

export default connect(mapStateToProps)(Neighborhood);

const Main_box = styled.div`

`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 2.2rem;
`;
const Des = styled.p`
  margin: 2rem 0;
`;
const More = styled.span `
    color: ${c.blue};
    font-weight: bold;
    cursor: pointer;
`
