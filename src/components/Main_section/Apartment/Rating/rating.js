import React, { Component } from "react";
import styled from "styled-components";
import RateStar from "./Rating_stars_icon";
// import { start } from "repl";

class RatingStars extends Component {
  createStars = () => {

    const { stars } = this.props;

    let starArray = [];
    const star = <RateStar isActive={true} />;

    for (let i = 1; i <= 5; i++) {
      if (i <= stars) {
        starArray.push(star); 
      } else {
        starArray.push(<RateStar isActive={false} />);
      }
    }

    return starArray.map((item) => {return item} )
  };



  render() {
    return <>{this.createStars()}</>;
  }
}

export default RatingStars;
