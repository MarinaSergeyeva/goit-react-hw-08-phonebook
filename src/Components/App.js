import React, { Component, Suspense } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import Alert from "./Alert/Alert";
import { connect } from "react-redux";
import actions from "../redux/contacts/contactsActions";
import operations from "../redux/operations/operations";
import { Switch } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import routes from "../routes/routes";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContact();
  }

  render() {
    // const loading = useSelector(state => getLoading(state));
    // const error = useSelector(getError);
    return (
      <>
        {this.props.loading && <h2>LOADING ...</h2>}

        <CSSTransition in={true} timeout={500} classNames={styles} appear={true} unmountOnExit>
          <p className={styles.sectionTitle}> Phonebook </p>
        </CSSTransition>

        <Navigation />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            {routes.map(route => {
              return route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              );
            })}
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/login" component={AuthForm} />
            <Route exact path="/register" component={AuthForm} />
            <Route exact path="/contacts" component={Main} /> */}
          </Switch>
        </Suspense>

        <Alert alert={alert} />

        {/* <ContactForm /> */}
        {/* {this.props.items.length > 1 && <Filter />}
        {!this.props.error && <ContactsList />}
        {this.props.error && <h2>ERROR ...</h2>} */}
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    items: state.contacts.items,
    loading: state.contacts.loading,
    error: state.contacts.error
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(actions.changeFilter(filter)),
  onFetchContact: () => dispatch(operations.onFetchContacts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
