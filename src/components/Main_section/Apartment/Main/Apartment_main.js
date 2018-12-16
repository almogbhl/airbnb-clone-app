import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "../../../../styled/Loader";
import Overview from "./Overview/Overview";
import Gallery from "./Gallery/Gallery";
import Reviews from "./Reviews/Reviews";
import Host_profile from "./Host_profile/Host_profile";
import Location from "./Location/Location";
import NavBar from "./Nav_bar/Nav_bar";
import Booking_request from "./Booking/Booking_request";
import Booking_form from "./Booking/Booking_form";
import * as c from "../../../../styled/constants";

class ApartmentMain extends Component {
  state = {
    isFixed: false,
    galleryHeight: 800
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll = () => {
    if (window.scrollY > this.state.galleryHeight) {
      this.setState({ isFixed: true });
    } else {
      this.setState({ isFixed: false });
    }
  };

  changeHeight = newHeight => {
    // console.log(newHeight);
    this.setState({ galleryHeight: newHeight + 40 });
  };

  render() {
    // const is_loading = this.props.is_loading;
    const data = this.props.apartment_data || {};
    const { posts_data, is_loading } = this.props;

    if (is_loading === true) {
      return <Loader></Loader>
    } else {
      return (
        <Wrapper onScroll={this.onScroll}>
          <NavBar show={this.state.isFixed} />
          <Header>
            <Gallery
              images={data}
              getHeight={newHeight => this.changeHeight(newHeight)}
            />
          </Header>
          <Conatainer>
            <Main_section>
              <Overview {...data} />
              <Reviews main={data} posts={posts_data} />
              <Host_profile {...data} />
              <Location {...data} />
            </Main_section>
            <Booking_section>
              <Booking_form {...data} />
              <Booking_request {...data} />
            </Booking_section>
          </Conatainer>
        </Wrapper>
      );
    }
  }
}
function mapStateToProps(state) {
  const { apartment_data, is_loading } = state.browse;
  const { posts_data } = state.ApartmentMain;

  return {
    apartment_data,
    is_loading,
    posts_data
  };
}
export default connect(mapStateToProps)(ApartmentMain);

const Wrapper = styled.div``;
const Conatainer = styled.div`
  @media (min-width: 743px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    margin: 0 auto;
    max-width: 110rem;
    min-width: 104rem;
  }
  @media (min-width: 1028px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
const Header = styled.div`
  width: 100%;
`;
const Main_section = styled.div`
  flex-basis: 60%;
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
const Booking_section = styled.div`
  position: relative;
  flex-basis: 40%;
  height: 290rem;
  display: flex;
  justify-content: center;
`;
