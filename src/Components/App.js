import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactsList from "./contactsList/ContactsList";
import Filter from "./filter/Filter";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import Alert from "./Alert/Alert";
import { connect } from "react-redux";
import actions from "../redux/contacts/contactsActions";
import operations from "../redux/operations/operations";
// import { getLoading, getError } from "../redux/contacts/selectors";

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

        <Alert alert={alert} />
        <CSSTransition in={true} timeout={500} classNames={styles} appear={true} unmountOnExit>
          <p className={styles.sectionTitle}> Phonebook </p>
        </CSSTransition>
        <ContactForm />
        {this.props.items.length > 1 && <Filter />}
        {!this.props.error && <ContactsList />}
        {this.props.error && <h2>ERROR ...</h2>}
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
