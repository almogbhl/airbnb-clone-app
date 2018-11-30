import {
  FILTER_LIST,
  FETCHING_APARTMENTS,
  APARTMENTS_FETCHED,
  FETCH_APARTMENTS_ERROR
} from "./Browse.action";

let initialState = {
  original_list: [],
  displayed_list: [],
  is_loading: false,
  error_msg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_LIST:
      return {
        ...state,
        displayed_list: action.payload
      };
    case FETCHING_APARTMENTS:
      return {
        ...state,
        is_loading: true
      };
    case APARTMENTS_FETCHED:
      return {
        original_list: action.payload,
        displayed_list: action.payload,
        is_loading: false
      };
    case FETCH_APARTMENTS_ERROR:
      return {
        error_msg: action.payload,
        is_loading: false
      };
    default:
      return state;
  }
};
