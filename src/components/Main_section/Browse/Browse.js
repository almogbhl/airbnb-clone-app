import React, { Component } from "react";
import styled from "styled-components";
import { flexbox } from "../../../styled/functions";
import * as c from "../../../styled/constants";
import { connect } from "react-redux";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Apartment from "../Apartment/Preview/Apartment";
import Filters from "./Filters/Filters";

class Browse extends Component {
  state = {
    data_array: []
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);

    const { displayed_list, filter_type } = this.props;
    console.log(filter_type);
    let filtered_array = [];

    if (filter_type === "superHost") {
      filtered_array = displayed_list.filter(
        item => item.superhost == true && item.rating_stars > 3
      );
    } else if (filter_type === "topRated") {
      filtered_array = displayed_list.filter(item => item.rating_stars === 5);
    } else if (filter_type === "world") {
      filtered_array = displayed_list;
    } else {
      filtered_array = displayed_list;
    }

    this.setState({ data_array: filtered_array });
  };

  showApartment = (e, item) => {
    // e.preventDefault();
    this.props.history.push("/apartmentMain");
  };

  render() {
    return (
      <Wrapper>
        <Filters />
        <MainBox>
          <Title>Explore all {this.state.data_array.length} homes</Title>
          <Ul>
            {this.state.data_array.map(item => (
              <Li key={item.id}>
                <Apartment {...item} />
              </Li>
            ))}
          </Ul>
        </MainBox>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const { displayed_list, filter_type } = state.browse;

  return {
    displayed_list,
    filter_type
  };
}

export default connect(mapStateToProps)(Browse);
const Wrapper = styled.div`
  width: 100%;
`;
const MainBox = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;

  @media (min-width: 1028px) {
    padding: 0 8rem;
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  line-height: 2.6rem;
  color: ${c.grey};
  margin: 1.5rem 0;
`;

const Ul = styled.ul`
  ${flexbox({ j: "space-between" })}
  flex-wrap: wrap;
`;

const Li = styled.li`
  list-style: none;
  width: 100%;

  @media (min-width: 743px) {
    width: calc(50% - 1.3rem);
  }

  @media (min-width: 1028px) {
    width: calc(25% - 1.3rem);
  }

  @media (min-width: 1439px) {
    width: calc(20% - 1.3rem);
  }
`;
