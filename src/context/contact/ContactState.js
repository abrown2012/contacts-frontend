import React, {useReducer} from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { v4 as uuidv4 } from "uuid";
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
        contacts: [], 
        current: null, 
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add
    const addContact = contact => {
        contact.id = uuidv4;
        dispatch({ type: ADD_CONTACT, payload: contact})        
    }

    //Delete
    const deleteContact = id => {
        
        dispatch({ type: DELETE_CONTACT, payload: id})        
    }
    // Set Current
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact});
    }
    // Clear
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }
    // Update 
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact});
    }


    // Filter 
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text});
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    }
    return (
        <ContactContext.Provider 
        value={{
            contacts: state.contacts, 
            current: state.current,
            addContact, 
            deleteContact, 
            setCurrent, 
            clearCurrent, 
            updateContact, 
            filtered: state.filtered, 
            filterContacts, 
            clearFilter

        }}>
            {props.children}
        </ContactContext.Provider>
    )
}; 

export default ContactState
