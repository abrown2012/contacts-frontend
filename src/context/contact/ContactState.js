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
        current: null
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
    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider 
        value={{
            contacts: state.contacts, 
            current: state.current,
            addContact, 
            deleteContact, 
            setCurrent, 
            clearCurrent

        }}>
            {props.children}
        </ContactContext.Provider>
    )
}; 

export default ContactState
