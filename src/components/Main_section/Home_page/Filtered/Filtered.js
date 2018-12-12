import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";
import Apartment from "../../Apartment/Preview/Apartment";
import { filterType } from './Filitered.action';


class Filtered extends Component {
  state = {
    data_array: [],
    imgBox: 0,
    title: "",
    type: "all"
  };

  componentDidMount = () => {
    const { displayed_list } = this.props;
    const type = this.props.type;
    
    this.setState({type: type})
    console.log(this.state.type)

    let filtered_array = [];

    if (type === "superHost") {
      filtered_array = displayed_list.filter(
        item => item.superhost == true && item.rating_stars > 3
      );
     
      this.setState({
        title: "Stay with a Superhost"
      });
    } else if (type === "topRated") {
      filtered_array = displayed_list.filter(item => item.rating_stars === 5);

      this.setState({
        title: "Stay at top-rated homes"
      });
    }

    //check screen size
    let screen_size = window.innerWidth;
    //decide number of items
    let custom_array = [];
    if (screen_size < 742) {
      for (let i = 1; i <= 4; i++) {
        custom_array.push(filtered_array[i]);
      }
    } else if (screen_size < 1127 || screen_size > 1450) {
      for (let i = 1; i <= 6; i++) {
        custom_array.push(filtered_array[i]);
      }
    } else if (screen_size > 1127) {
      for (let i = 1; i <= 8; i++) {
        custom_array.push(filtered_array[i]);
      }
    }
    //cut the array to make sure it contain the correct number of items

    this.setState({ data_array: custom_array });
  };

  show_full_list = () => {
    this.props.do_filter_type(this.state.type);
    this.props.history.push("/browse");
  }

  render() {
    return (
      <MainBox>
        <Title onClick={this.show_full_list} >{this.state.title}</Title>
        {/* <SubTitle>Make yourself at home with these experienced hosts</SubTitle> */}
        <Ul size={this.state.imgBox}>
          {this.state.data_array.map(item => (
            <Li key={item.id}>
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
function mapDispatchToProps(dispatch, ownProps) {
  return {
      do_filter_type: (type) => dispatch(filterType(type))
      
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filtered));

const MainBox = styled.main`
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
  /* padding: 0 2.5rem; */
`;

const Ul = styled.ul`
  ${flexbox({ j: "space-between" })}
  flex-wrap: wrap;

  /* border: 3px solid tomato; */
`;

const Li = styled.li`
  list-style: none;
  width: calc(50% - 1.3rem);

  @media (min-width: 970px) {
    width: calc(33% - 1.3rem);
  }
  @media (min-width: 1240px) {
    width: calc(25% - 1.3rem);
  }
  @media (min-width: 1450px) {
    width: calc(16.6% - 1.3rem);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;
const SubTitle = styled.span``;
