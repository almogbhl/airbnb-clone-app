import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { flexbox } from "../../../../styled/functions";
import * as c from "../../../../styled/constants";
import Apartment from "../../Apartment/Preview/Apartment";
import { filterType } from "./Filitered.action";
import HomesLoader from "../../../../styled/Loaders/Homes_loader";
import { Link } from "react-router-dom";

class Filtered extends Component {
  state = {
    modified_data: [],
    original_data: [],
    imgBox: 0,
    title: "",
    type: "world"
  };

  componentDidMount() {
    const data = this.props.homes_list || [];
    const type = this.props.type;

    this.setState({ type });

    let filtered_array = [];

    if (type === "superHost") {
      filtered_array = data.filter(
        item => item.superhost == true && item.rating_stars > 3
      );
      this.setState({
        title: "Stay with a Superhost"
      });
    } else if (type === "topRated") {
      filtered_array = data.filter(item => item.rating_stars === 5);
      this.setState({
        title: "Stay at top-rated homes"
      });
    } else if (type === "Homes") {
      filtered_array = data;
      this.setState({
        title: "Homes around the world"
      });
    }

    this.setState({
      original_data: filtered_array
    }, () => this.updateDimensions() ); 
  }

  componentWillMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    let screen_size = window.innerWidth;
    
    // breaking points
    const break1 = 970;
    const break2 = 1240;
    const break3 = 1450;

    // decide number of items
    if (screen_size < break1) {
      return this.printItems(4);
    } else if (screen_size > break1 && screen_size < break2) {
      return this.printItems(6);
    } else if (screen_size > break2 && screen_size < break3) {
      return this.printItems(8);
    } else if (screen_size > break3) {
      return this.printItems(10);
    }
  };

  printItems = numOfItems => {
    let custom_array = [];
    let data = this.state.original_data;
    for (let i = 1; i <= numOfItems; i++) {
      custom_array.push(data[i]);
    }

    this.setState({ modified_data: custom_array });
  };

  show_full_list = () => {
    this.props.do_filter_type(this.state.type);
  };

  render() {
    if (this.props.homes_is_loading === true || this.state.modified_data[0] === undefined) {
      return <HomesLoader />;
    } else {
      return (
        <MainBox>
          <Link to={`/homes`}>
            <Title onClick={this.show_full_list}>{this.state.title}</Title>
          </Link>

          <Ul>
            {this.state.modified_data.map((item, i) => (
              <Li key={i}>
                <Apartment {...item} />
              </Li>
            ))}
          </Ul>
        </MainBox>
      );
    }
  }
}

function mapStateToProps(state) {
  const { homes_list, homes_is_loading } = state.homepage;

  return {
    homes_list,
    homes_is_loading
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    do_filter_type: type => dispatch(filterType(type))
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filtered)
);

const MainBox = styled.main`
  margin: 2.5rem 0;
  display: flex;
  flex-direction: column;
`;

const Ul = styled.ul`
  ${flexbox({ j: "space-between" })}
  flex-wrap: wrap;
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
    width: calc(20% - 1.3rem);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  color: ${c.grey};
`;
const SubTitle = styled.span``;


  //  const filterTypeConfig = {
    //     superHost: {
    //       title: "Stay with a Superhost",
    //       filterType: data.filter(
    //         item => item.superhost == true && item.rating_stars > 3
    //       )
    //     },
    //     topRated: {
    //       title: "Stay at top-rated homes",
    //       filterType: data.filter(item => item.rating_stars === 5)
    //     },
    //     world: {
    //       title: "Homes around the world",
    //       filterType: data
    //     }
    //   };

    // const config = filterTypeConfig;

    // if (type === config[type]) {
    //   filtered_array = config[type].filterType;
    //   this.setState({
    //     title: config.title,
    //     filtered_data: filtered_array
    //   });
    // }