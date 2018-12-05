import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";
import StaticImg from '../../../../../img/staticmap.png';

class Neighborhood extends Component {
  render() {
    return (
      <Container>
        <Main_box>
         <Img src={StaticImg} />
         <Title>
            Exact location information is provided after a booking is confirmed.
         </Title>
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

export default connect(mapStateToProps)(Neighborhood);

const Container = styled.div `
`

const Main_box = styled.div`
    margin: 1rem 0;
    width: 100%;
`;
const Img = styled.img `
    width: 100%;
`
const Title = styled.p `
    
`