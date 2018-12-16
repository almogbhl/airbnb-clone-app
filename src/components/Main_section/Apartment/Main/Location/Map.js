import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { Section } from "../../../../../styled/styled.components";
import StaticImg from "../../../../../img/staticmap.png";

class Map extends Component {
  state = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 6
  };

  componentDidMount = () => {
    const { lat, lon } = this.props;
    const latitude = parseInt(lat);
    const lonitude = parseInt(lon);

    this.setState({
      center: {
        lat: latitude,
        lng: lonitude
      }
    });
  };

  render() {
   
    return (
      <Container>
        <Main_box>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBgOuY6CVwmyt_N6Doj6P0_coKIMQzzBMo"
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          />
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

export default connect(mapStateToProps)(Map);

const Container = styled.div`
  border: 1px solid red;
  /* width: 100%;
  height: 100%; */
`;

const Main_box = styled.div`

  z-index: 1;
  margin: 1rem 0;
  height: 20vh;
  width: 25vw;

  @media (min-width: 1028px) {
    height: 40vh;
    width: 30vw;
  }
`;
// const Map = styled.div`
//   width: 100%;
// `;
const Title = styled.p``;
