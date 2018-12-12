import React, { Component } from "react";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";
import * as c from "../../../../../styled/constants";

class Space extends Component {
  render() {
    const data = this.props.data;
    return (
      <Section>
        <Main>
          <Title>The space</Title>
          <Info>
            {data}
          </Info>
          {/* <More>Read more about the space</More> */}
        </Main>
      </Section>
    );
  }
}

export default Space;

const Main = styled.div``;
const Title = styled.h4`
line-height: 2rem;
font-size: 1.7rem;
font-weight:bold;

`;
const Info = styled.p`
margin: 2.5rem 0;`;
const More = styled.p `
color: ${c.blue};
font-weight: bold;
font-size: 1.7rem;
margin-bottom: 2.5rem;

&:hover {
    cursor: pointer;
    border-bottom: 1px solid ${c.blue};
  }
`