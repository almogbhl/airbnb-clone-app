import React, { Component } from "react";
import styled from "styled-components";
import * as c from "../../../styled/constants";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { filterType } from "../../Main_section/Home_page/Filtered_homes_types/Filitered.action";

class Suggestions extends Component {
  state = { show: true, wider: false };

  componentWillMount() {
    let { show, wider } = this.props;
    this.setState({ show: show, wider });
  }
  componentWillUnmount() {
    this.setState({ show: false, wider: false });
  }
  show_full_list = e => {
    const city = e.target.dataset.city;
    this.props.do_filter_type(city);

    const { defaultValue } = this.props;
    const bool = true;
    defaultValue(bool);
  };

  render() {
    const options = this.props.results.map((item, i) => (
      <Link key={i} to={`/homes`}>
        <Li data-city={item.city} onClick={this.show_full_list}>
          {item.city}, {item.country}
        </Li>
      </Link>
    ));

    return (
      <Ul ref="suggestions" wider={!this.state.wider} show={this.state.showSuggestions}>
        {options}
      </Ul>
    );
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    do_filter_type: type => dispatch(filterType(type))
  };
}
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Suggestions)
);

const Ul = styled.ul`
  position: absolute;
  visibility: ${props => props.show ? "hidden" : "visible"};
  border: 1px solid ${props => props.show ? "lightgray" : "transparent"};
  max-height: 30.6rem;
  overflow: hidden;
  width: calc(100% + 1rem);
  max-width: 46rem;
  transition: width 0.7s ease-out;
  z-index: 1000;

  @media (min-width: 743px) {
    width:  ${props => props.wider ? "calc(100% - 25px)" : "calc(70% - 25px)"};
    max-width: ${props => props.wider ? "52rem" : "46rem"};
  }
`;
const Li = styled.li`
  list-style: none;
  background-color: white;
  padding: 2rem 3rem;
  ${c.border};
  ${c.box_shadow_form};
  color: ${c.grey};
  font-weight: 700;
  font-size: 1.6rem;
  transition: box-shadow 200ms ease-in, background-color 200ms ease-in;

  &:hover {
    background-color: #fafafa;
  }
`;

const Item = styled.span`
  margin-right: 1rem;
`;
