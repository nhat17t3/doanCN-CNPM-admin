import { postConstants } from "../../actions/constants";

const initState = {
  listPostCompleted: [],
  listPostMustVerify: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case postConstants.GET_ALL_POST_COMPLETED_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.GET_ALL_POST_COMPLETED_SUCCESS:
      state = {
        ...state,
        loading: false,
        listPostCompleted: action.payload.listPostCompleted,
      };
      break;
    case postConstants.GET_ALL_POST_COMPLETED_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
      case postConstants.GET_ALL_POST_MUST_VERIFY_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case postConstants.GET_ALL_POST_MUST_VERIFY_SUCCESS:
        state = {
          ...state,
          loading: false,
          listPostMustVerify: action.payload.listPostMustVerify,
        };
        break;
      case postConstants.GET_ALL_POST_MUST_VERIFY_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;
    case postConstants.ACCEPT_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.ACCEPT_POST_SUCCESS:
      state = {
        ...state,
        messages: action.payload.message,
        loading: false,
      };
      break;
    case postConstants.ACCEPT_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case postConstants.DENY_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.DENY_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "deny post successfully",
      };
      break;
    case postConstants.DENY_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case postConstants.DELETE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstants.DELETE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        messages: "delete post successfully",
      };
      break;
    case postConstants.DELETE_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};