import React, { Component } from "react";
import styled from "styled-components";


class Post extends Component {
  render() {
    const { } = this.props;


    return (
      <Container>
          <User_box>
              <User_avatar src="https://a0.muscache.com/im/pictures/e2410fec-aa88-489e-91fd-08ef3b621e07.jpg?aki_policy=profile_x_medium" alt="name"/>
              <User_name>First Name</User_name>
          </User_box>
          <User_post>
              <Post_msg>Wonderful, tranquil, relaxing . Cannot recommend highly enough. Kerri-lee is an awesome host.</Post_msg>
          </User_post>
      </Container>
    );
  }
}

export default Post;


const Container = styled.div`
  width: 100%;
  /* padding: 2.5rem 0; */
  /* border-bottom: 1px solid lightgray; */
  &:last-child {
  border: none;
  padding-bottom: 0;
  }
`;

const User_avatar = styled.img `
    border-radius: 50%;
    height: 45px;
    width: 45px;
    margin-right: 2rem;
`

const User_box = styled.div `
    display: flex; 
    align-items: center;
`;

const User_post = styled.div `

`

const Post_msg = styled.p `
    margin-top: 1.5rem;
    line-height: 2.2rem;
    font-size: 1.6rem;
    color: #484848;
`

const User_name = styled.p `
    font-size: 1.5rem;
    font-weight: 800;
`