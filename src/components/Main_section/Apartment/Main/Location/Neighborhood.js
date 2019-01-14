import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as c from "../../../../../styled/constants";

class Neighborhood extends Component {
  render() {
    const {host_first_name, host_last_name, street, city, country} = this.props;
    return (
      <Main_box id="location">
        <Title>The neighborhood</Title>
        <Des>
          {`${host_first_name} ${host_last_name}’s home is located in ${street}, ${city}, ${country}.`}
        </Des>
        <Des>
            Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
          </Des>
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

const Main_box = styled.div``;
const Title = styled.h2`
  font-weight: bold;
  font-size: 2.2rem;
`;
const Des = styled.p`
  margin: 2rem 0;
`;
const More = styled.span`
  color: ${c.blue};
  font-weight: bold;
  cursor: pointer;
`;
