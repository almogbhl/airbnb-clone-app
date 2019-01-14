import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Overview from "./Overview/Overview";
import Gallery from "./Gallery/Gallery";
import Reviews from "./Reviews/Reviews";
import Host_profile from "./Host_profile/Host_profile";
import Location from "./Location/Location";
import NavBar from "./Nav_bar/Nav_bar";
import Booking_request from "./Booking/Booking_request";
import Booking_form from "./Booking/Booking_form";
import CityLoader from "../../../../styled/Loaders/City_loader";
import * as c from "../../../../styled/constants";
require("dotenv").config();

const API_URL = process.env.REACT_APP_API_URL;

class ApartmentMain extends Component {
  state = {
    isFixed: false,
    galleryHeight: 800,
    bookingHeight: 267,
    room: [],
    posts: [],
    heights: [],
    roomid: ''
  };

  async componentDidMount() {
    const { roomid } = this.props.match.params;

    // rooms
    const roomsRes = await fetch(`${API_URL}/api/rooms/${roomid}`);
    const roomData = (await roomsRes.json()) || [];
    // posts
    const postsRes = await fetch(`${API_URL}/api/posts`);
    const postsData = await postsRes.json();

    this.setState({ room: roomData, posts: postsData, roomid });

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

    let mainSection = this.refs.mainSection;

    this.setState({
      bookingHeight: mainSection.clientHeight
    });
  };

  changeHeight = newHeight => {
    this.setState({ galleryHeight: newHeight + 40 });
  };

  render() {
    const data = this.state.room[0];
    const posts = this.state.posts;

    if (data !== undefined) {
      return (
        <Wrapper onScroll={this.onScroll}>
          <NavBar roomid={this.state.roomid} heights={this.state.heights} show={this.state.isFixed} />
          <Header>
            <Gallery
              data={data}
              getHeight={newHeight => this.changeHeight(newHeight)}
            />
          </Header>
          <Conatainer>
            <Main_section id='overview' ref="mainSection">
              <Overview  {...data} />
              <Reviews  main={data} posts={posts} />
              <Host_profile {...data} />
              <Location {...data} />
            </Main_section>
            <Booking_section height={this.state.bookingHeight}>
              <Booking_form {...data} />
              <Booking_request {...data} />
            </Booking_section>
          </Conatainer>
        </Wrapper>
      );
    } else {
      return (
        <>
          <CityLoader />
        </>
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

const Wrapper = styled.div`
  margin-bottom: 8rem;
`;
const Conatainer = styled.div`
  @media (min-width: 743px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  display: flex;
  justify-content: center;
  /* overflow-x:visible; */
  @media (min-width: 1028px) {
    height: ${props => props.height}px;
  }
`;
