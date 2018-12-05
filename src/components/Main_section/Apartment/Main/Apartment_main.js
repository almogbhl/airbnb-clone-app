import React, { Component } from "react";
import styled from "styled-components";
import Overview from "./Overview/Overview";
import Gallery from "./Gallery/Gallery";
import Reviews from "./Reviews/Reviews";
import Host_profile from "./Host_profile/Host_profile";
import Location from "./Location/Location";
import NavBar from "./Nav_bar/Nav_bar";
import Booking from "./Booking/Booking";
import * as c from "../../../../styled/constants";

class ApartmentMain extends Component {
  state = {
    isFixed: false,
    galleryHeight: 800
  };


  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
  onScroll = () => {
      
    if (window.scrollY > this.state.galleryHeight) {
      this.setState({isFixed: true})
    } else {
      this.setState({isFixed: false})
    }
  };

  changeHeight = (newHeight) => {
    console.log(newHeight)
    this.setState({galleryHeight: newHeight})
  }

  render() {
    return (
      <Wrapper onScroll={this.onScroll}>
        <NavBar show={this.state.isFixed} />
        <Header>
          <Gallery getHeight={(newHeight) => this.changeHeight(newHeight)} />
        </Header>
        <Main>
          <Overview />
          <Reviews />
          <Host_profile />
          <Location />
        </Main>
          <Booking />
      </Wrapper>
    );
  }
}

export default ApartmentMain;

const Wrapper = styled.div`

 @media (min-width: 743px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;
const Header = styled.div`
width: 100%;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Lato", -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue,
    sans-serif;
  padding: 0 2.5rem;
  color: ${c.grey};
  font-size: 1.6rem;
  max-width: 72rem;

  @media (min-width: 743px) {
    padding: 2.5rem 8rem;
  }
  @media (min-width: 1028px) {
    padding: 0 2.5rem;
  }
 
`;
