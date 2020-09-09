import constants from "./authConstants";

// REGISTER

const registerRequest = () => ({
  type: constants.REGISTER_REQUEST
});
const registerSuccess = userData => ({
  type: constants.REGISTER_SUCCESS,
  payload: { ...userData }
});
const registerError = error => ({
  type: constants.REGISTER_ERROR,
  payload: error
});

// LOGIN

// const loginRequest = () => ({
//   type: constants.LOGIN_REQUEST
// });
// const loginSuccess = userData => ({
//   type: constants.LOGIN_SUCCESS,
//   payload: userData
// });
// const loginError = error => ({
//   type: constants.LOGIN_ERROR,
//   payload: error
// });

// LOGOUT

// const logoutRequest = () => ({
//   type: constants.LOGOUT_REQUEST
// });
const logoutSuccess = () => ({
  type: constants.LOGOUT_SUCCESS
});
// const logoutError = error => ({
//   type: constants.LOGOUT_ERROR,
//   payload: error
// });

// GETCURRENTUSER

// const getCurrentUserRequest = (token) => ({
//   type: constants.GET_CURRENT_USER_REQUEST,
//   payload: token,
// });
// const getCurrentUserSuccess = (token) => ({
//   type: constants.GET_CURRENT_USER_SUCCESS,
//   payload: token,
// });
// const getCurrentUserError = (token) => ({
//   type: constants.GET_CURRENT_USER_ERROR,
//   payload: token,
// });

export default {
  registerRequest,
  registerSuccess,
  registerError,

  // loginRequest,
  // loginSuccess,
  // loginError

  // logoutRequest,
  logoutSuccess
  // logoutError

  //   getCurrentUserRequest,
  //   getCurrentUserSuccess,
  //   getCurrentUserError,
};
