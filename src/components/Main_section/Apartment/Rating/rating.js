import React, { Component } from "react";
import styled from "styled-components";
import RateStar from "./Rating_stars_icon";


class RatingStars extends Component {
  createStars = () => {

    const { num, type, size } = this.props;

    let starArray = [];
    
    for (let i = 1; i <= 5; i++) {
      const star = <RateStar key={i} size={size} isActive={true} />;
      
      if (i <= num) {
        starArray.push(star); 
      } else {
        if(type === "AP_preview") {
          starArray.push(<RateStar key={i} size={size} isActive={false} />);
        } else {
          break;
        }
      }
    }

    return starArray.map((item) => {return item} )
  };



  render() {
    return <>{this.createStars()}</>;
  }
}

export default RatingStars;
