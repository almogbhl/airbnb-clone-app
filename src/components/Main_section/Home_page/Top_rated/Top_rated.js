import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";
import Apartment from "../../Apartment/Preview/Apartment";

class TopRated extends Component {
  state = {
    topRated: [],
    imgBox: "330px"
  };

  componentDidMount = () => {
    const { displayed_list } = this.props;

    let topRated = displayed_list.filter(item => item.rating_stars === 5);
    //check screen size
    //decide number of items
    //cut the array to make sure it contain the correct number of items
    console.dir(this.refs);
    // let box = this.refs.cardBox;
    // let box_size = box.clientWidth;

    this.setState({ topRated: topRated });
  };

  render() {
    return (
      <MainBox ref="sdsdsd">
        <Title>Stay at top-rated homes</Title>
        {/* <SubTitle>Make yourself at home with these experienced hosts</SubTitle> */}
        <Ul size={this.state.imgBox}>
          {this.state.topRated.map(item => (
            <Li ref="cardBox" key={item.id}>
              <Apartment {...item} />
            </Li>
          ))}
        </Ul>
      </MainBox>
    );
  }
}

function mapStateToProps(state) {
  const { displayed_list } = state.browse;

  return {
    displayed_list
  };
}

export default connect(mapStateToProps)(TopRated);

const MainBox = styled.main`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  /* padding: 0 2.5rem; */
`;

const Ul = styled.ul`
  ${flexbox({ j: "space-between" })}
  flex-wrap: wrap;
  overflow-y: hidden;
  overflow-x: auto;
  border: 3px solid tomato;
  height: 29rem;
  @media (min-width: 743px) {
  }

  @media (min-width: 1128px) {
   
  }
  @media (min-width: 1300px) {
    /* height: ${props => props.size}; */
    height: 28rem;
  }
`;

const Li = styled.li`
  list-style: none;
  width: calc(50% - 1.3rem);
  /* border: 1px solid black; */

  @media (min-width: 743px) {
    width: calc(33% - 1.3rem);
  }

  @media (min-width: 1128px) {
    width: calc(25% - 1.3rem);
  }
  @media (min-width: 1300px) {
    width: calc(20% - 1.3rem);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
const SubTitle = styled.span``;
