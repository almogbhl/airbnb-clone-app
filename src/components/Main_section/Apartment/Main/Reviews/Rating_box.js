import React, { Component } from "react";
import styled from "styled-components";
import RateStar from "../../Rating/Rating_stars_icon";

class Rating_box extends Component {
  render() {
    const { } = this.props;


    return (
      <Container>
        <Rating_type>Accuracy</Rating_type>
        <Stars_box>
            <Star>
                <RateStar isBig={true} isActive={true}/>
            </Star>
            <Star>
                <RateStar isBig={true} isActive={true}/>
            </Star>
            <Star>
                <RateStar isBig={true} isActive={true}/>
            </Star>
            <Star>
                <RateStar isBig={true} isActive={true}/>
            </Star>
            <Star>
                <RateStar isBig={true} isActive={true}/>
            </Star>
        </Stars_box>
      </Container>
    );
  }
}

export default Rating_box;


const Container = styled.div `
    padding: .5rem 0;
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* border: 1px solid red; */
    @media (min-width: 743px) {
        width: calc(50% - 2rem)

    }
`;
const Rating_type = styled.p `
    font-size: 1.7rem;
    color: #484848;
`
const Stars_box = styled.div `
    /* border: 1px solid red; */
    display: flex;

    @media (min-width: 743px) {

    }
`
const Star = styled.div `
    margin-left: .5rem;
   
`