import React from "react";
import styles from "./ContactsListItems.module.css";
import { connect } from "react-redux";
// import actions from "../../redux/contacts/contactsActions";
import operations from "../../redux/operations/operations";

function ContactsListItems({ contact, onRemoveContact }) {
  // const checkRemove = (e) => {
  //   console.dir(e.target.id);
  // };
  const deleteItem = e => {
    onRemoveContact(e.target.id);
  };

  return (
    <li className={styles.ContactsListItem}>
      {contact.name}: {contact.number}
      <button type="button" id={contact.id} onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(operations.onRemoveContact(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ContactsListItems);
