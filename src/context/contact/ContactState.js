import React, {useReducer} from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import uuid from 'uuid';
import {
    ADD_CONTACT, 
    DELETE_CONTACT, 
    SET_CURRENT, 
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS, 
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: []
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Cotnact
    const addContact = contact => {
        
    }

    // Delete Contact

    // Set Current Contact

    // Clear Curren 

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider 
        value={{
            contacts: state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}; 

export default ContactState
