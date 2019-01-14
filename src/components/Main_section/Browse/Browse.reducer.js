import {
  FILTER_LIST
} from "./Browse.action";

let initialState = {
  filter_type: "",
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
    default:
      return state;
  }
};
