import React, { Component } from "react";
import { Route , withRouter} from 'react-router-dom';
import styled from "styled-components";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";
import home_img from "../../../../img/explore_home.webp";

 class Card extends Component {
  showApartments = ()=> {
    this.props.history.push('/browse');
  }
  render() {
    return (
      <Box onClick={this.showApartments} >
        <Img_box />
        <Content>
          <Title_box>
            <Title>Homes</Title>
          </Title_box>
        </Content>
      </Box>
    );
  }
}
export default withRouter(Card)
const Box = styled.div`
  height: 100%;
  max-width: 14.5rem;
  min-width: 14.5rem;
  /* width: calc(33% - .6rem); */
  /* flex-basis: 33%; */
  margin-right: 1rem;  
  display: inline-flex;
  flex-direction: column;
  border: 1px solid ${c.lightGrey};
  cursor: pointer;

  @media (min-width: 743px) {

 

  }
  @media (min-width: 940px) {
 
  }

`;
const Img_box = styled.div`
  /* border: 1px solid blue; */
  flex-basis: 60%;
  background-image: url(${home_img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
`;
const Content = styled.div`
  /* border: 1px solid blue; */
  flex-basis: 40%;
`;
const Title_box = styled.div`
  padding: 1rem;
`;
const Title = styled.span`
  color: ${c.grey};
  font-size: 1.5rem;
  font-weight: bold;
`;
