import React, {Fragment, useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem'

const Contacts = () => {

    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if(contacts.lenght === 0 ) {
        return <h4>Add your first contact</h4>
    }

    return (
        <div>
            <Fragment>
                
                {contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact}/> 
                ))}
            </Fragment>
        </div>
    )
}

export default Contacts 