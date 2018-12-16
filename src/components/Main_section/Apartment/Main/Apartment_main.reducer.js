import {
  FETCHING_POSTS,
  POSTS_FETCHED,
  FETCHING_POSTS_ERROR
} from "../Preview//Apartment.action";


let initialState = {
  posts_data: [],
  is_loading: false,
  error_msg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_POSTS:
      return {
        ...state,
        is_loading: true,
      };
    case POSTS_FETCHED:
      return {
        ...state,
        posts_data: action.payload,
        is_loading: false,
      };
    case FETCHING_POSTS_ERROR:
      return {
        ...state,
        error_msg: "FETCHING POSTS FAIL"
      };
   
    default:
      return state;
  }
};
