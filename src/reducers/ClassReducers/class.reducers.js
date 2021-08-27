import { classConstants } from "../../actions/constants";

const initState = {
  listClassRequestOpen: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case classConstants.GET_ALL_CLASS_REQUEST_OPEN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case classConstants.GET_ALL_CLASS_REQUEST_OPEN_SUCCESS:
      state = {
        ...state,
        loading: false,
        listClassRequestOpen: action.payload.listClassRequestOpen,
      };
      break;
    case classConstants.GET_ALL_CLASS_REQUEST_OPEN_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    case classConstants.ACCEPT_CLASS_OPEN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case classConstants.ACCEPT_CLASS_OPEN_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "Accept Class Open successfully",
      };
      break;
    case classConstants.ACCEPT_CLASS_OPEN_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
