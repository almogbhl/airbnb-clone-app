import React, { Component } from "react";
import styled from "styled-components";
import * as c from "../../../styled/constants";
import { connect } from "react-redux";
import Apartment from "../Apartment/Preview/Apartment";
import HomesLoader from "../../../styled/Loaders/Homes_loader";

class Browse extends Component {
  state = {
    data_array: [],
    elementsView: true
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    const { homes_list, filter_type } = this.props;

    let filtered_array = [];
    if (filter_type === "superHost") {
      filtered_array = homes_list.filter(
        item => item.superhost == true && item.rating_stars > 3
      );
    } else if (filter_type === "Homes") {
      filtered_array = homes_list;
    } else {
      filtered_array = homes_list.filter(item =>
        item.city.toLowerCase().includes(filter_type.toLowerCase()) ||
        item.country.toLowerCase().includes(filter_type.toLowerCase())
      );
    }

    this.setState({ data_array: filtered_array });
  }


  componentWillMount() {
    let data = this.state.data_array;
    if(data.length < 4) {
      this.setState({elementsView: false})
    }
  }


  render() {
    if (this.state.data_array === [] || this.state.data_array === undefined) {
      return <HomesLoader />;
    } else {
      return (
        <Wrapper>
          <MainBox>
            <Title>Explore all {this.state.data_array.length} homes</Title>
            <Ul view={this.state.elementsView}>
              {this.state.data_array.map((item, i) => (
                <Li key={i}>
                  <Apartment {...item} />
                </Li>
              ))}
            </Ul>
          </MainBox>
        </Wrapper>
      );
    }
  }
}

function mapStateToProps(state) {
  const { homes_list, homes_is_loading, filter_type } = state.homepage;

  return {
    homes_list,
    homes_is_loading,
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
 display: flex;
 justify-content: ${props => props.view ? 'space-between' : 'flex-start'};
  flex-wrap: wrap;
`;

const Li = styled.li`
  list-style: none;
  width: 100%;
  margin-right: ${props => props.view ? '0px' : '1.3rem'};
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
