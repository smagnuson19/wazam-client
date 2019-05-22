import { ActionTypes } from '../actions';

const UserReducer = (state =
{
  authentication: false,
  matches: [],
  crushes: [],
  userInfo: null,
},
action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        ...state,
        authentication: true,
        userInfo: action.payload,
      };
    case ActionTypes.FETCH_MATCHES:
      return state + 1;
    case ActionTypes.FETCH_CRUSHES:
      return state - 1;
    default:
      return state;
  }
};

export default UserReducer;
