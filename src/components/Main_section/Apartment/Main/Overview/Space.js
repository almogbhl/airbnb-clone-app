import React, { Component } from "react";
import styled from "styled-components";
import { Section } from "../../../../../styled/styled.components";
import * as c from "../../../../../styled/constants";

class Space extends Component {
  render() {
    return (
      <Section>
        <Main>
          <Title>The space</Title>
          <Info>
            Bed and breakfast in splendid Vesuviana's Villa of 1700. It was the
            Royal Bourbon Pheasantry, part of the Royal Palace of Portici. It
            has three bedrooms with bathrooms, WiFi Internet, air conditioning,
            car-parking. At guests' disposal: large garden, rooms with antiques
            furniture, roof solarium. To its proximity to major public transport
            (Circunvesuviana, bus, metro of the Sea), the B & B Villa San
            Gennariello is ideal for excursions to Pompeii, Naples, Sorrento,
            Capri and Ischia, Campi Flegrei. Archaeological excavations of
            Herculaneum are within walking distance(10 minutes). Double Room or
            Double Single Use: large and sunny room with private bathroom,
            antiques furnitures, air conditioning, wifi internet, Tv-Dig/Sat,
            DVD. King size bed or twin; possibility of adding a third bed.
          </Info>
          <More>Read more about the space</More>
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