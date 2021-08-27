import { tutorConstants } from "../../actions/constants";

const initState = {
  listTutorCompleted: [],
  listTutorMustVerify: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case tutorConstants.GET_ALL_TUTOR_COMPLETED_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case tutorConstants.GET_ALL_TUTOR_COMPLETED_SUCCESS:
      state = {
        ...state,
        loading: false,
        listTutorCompleted: action.payload.listTutorCompleted,
      };
      break;
    case tutorConstants.GET_ALL_TUTOR_COMPLETED_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

      case tutorConstants.GET_ALL_TUTOR_MUST_VERIFY_REQUEST:
        state = {
          ...state,
          loading: true,
        };
        break;
      case tutorConstants.GET_ALL_TUTOR_MUST_VERIFY_SUCCESS:
        state = {
          ...state,
          loading: false,
          listTutorMustVerify: action.payload.listTutorMustVerify,
        };
        break;
      case tutorConstants.GET_ALL_TUTOR_MUST_VERIFY_FAILURE:
        state = {
          ...state,
          loading: false,
          error: action.payload.error,
        };
        break;

        case tutorConstants.ACCEPT_TUTOR_REQUEST:
          state = {
            ...state,
            loading: true,
          };
          break;
        case tutorConstants.GET_ALL_TUTOR_COMPLETED_SUCCESS:
          state = {
            ...state,
            loading: false,
            messages: "Accept Tutor successfully",
          };
          break;
        case tutorConstants.ACCEPT_TUTOR_FAILURE:
          state = {
            ...state,
            loading: false,
            error: action.payload.error,
          };
          break;

          case tutorConstants.DENY_TUTOR_REQUEST:
            state = {
              ...state,
              loading: true,
            };
            break;
          case tutorConstants.DENY_TUTOR_SUCCESS:
            state = {
              ...state,
              loading: false,
              messages: "Deny Tutor successfully",
            };
            break;
          case tutorConstants.DENY_TUTOR_FAILURE:
            state = {
              ...state,
              loading: false,
              error: action.payload.error,
            };
            break;
      
  }
  return state;
};