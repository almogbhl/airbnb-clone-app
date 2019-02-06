import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import FilteredHomesTypes from "./Filtered_homes_types";
import { fetchHomes } from "./Filitered.action";
import HomesLoader from "../../../../styled/Loaders/Homes_loader";

class FilteredHomesMain extends Component {
  componentWillMount() {
    this.props.do_fetchHomes();
  }

  allHomes = () => {
    let world = [];
    const type = "Homes";
    const title = "Homes around the world";
    const homesList = this.props.homes_list;
    let filteredHomesList = homesList;

    world.push(filteredHomesList, title, type);
    return world;
  };

  superHostFilter = () => {
    let superHost = [];
    const type = "superHost";
    const homesList = this.props.homes_list;
    const title = "Stay with a Superhost";

    let filteredHomesList = homesList.filter(
      item => item.superhost == true && item.rating_stars > 3
    );

    superHost.push(filteredHomesList, title, type);
    return superHost;
  };

  render() {
    if (this.props.homes_list === null) {
      return <HomesLoader />;
    } else {
      return (
        <Wrapper>
          <FilteredHomesTypes data={this.superHostFilter()} />
          <FilteredHomesTypes data={this.allHomes()} />
        </Wrapper>
      );
    }
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    do_fetchHomes: () => dispatch(fetchHomes())
  };
}
function mapStateToProps(state) {
  const { homes_list, homes_is_loading } = state.homepage;
  return {
    homes_list,
    homes_is_loading
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilteredHomesMain)
);

const Wrapper = styled.div``;

// let superHost = [];
// const superHostTitle = "Stay with a Superhost";

// let superHostHomesList = homesList.filter(
//   item => item.superhost == true && item.rating_stars > 3
// );
// superHost.push(superHostHomesList, superHostTitle);

// homesList={superHostHomesList}
// title={superHostTitle}
// type="superHost"

// homesList={worldHomesList}
// title={worldHomesTitle}
// type="Homes"

// const [superHostHomesList, superHostTitle]   = this.state.superHostData;
// const [worldHomesList, worldHomesTitle]      = this.state.worldData;
// let is_loading = this.props.homes_is_loading;
// console.log("this.state.worldData: ", this.state.worldData)
