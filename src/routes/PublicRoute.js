import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import routes from "./routes";

function PublicRoute({ component: MyComponent, isAuth, ...rest }) {
  // console.log("isAuth", isAuth);
  return (
    <Route
      {...rest}
      render={props => {
        return isAuth && rest.restricted ? <Redirect to="/contacts" /> : <MyComponent {...props} />;
      }}
    />
  );
}

const mapStateToProps = state => ({
  isAuth: state.auth.onAuth.token
});

export default connect(mapStateToProps)(PublicRoute);
