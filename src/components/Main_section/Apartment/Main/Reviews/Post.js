import React, { Component } from "react";
import styled from "styled-components";


class Post extends Component {
  render() {
    const { avatar, first_name, comment } = this.props.data;
    
    return (
      <Container>
          <User_box>
              <User_avatar src={avatar} alt="name"/>
              <User_name>{first_name}</User_name>
          </User_box>
          <User_post>
              <Post_msg>{comment}</Post_msg>
          </User_post>
      </Container>
    );
  }
}

export default Post;


const Container = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  /* margin-top: 2.5rem; */
  border-bottom: 1px solid lightgray;
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