import React, {useContext, useRef, useEffect} from 'react';
import contactContext from '../../context/contact/contactContext';
import contactContext from '../../context/contact/contactContext';


const ContactFilter = () => {
    const contactContext = useContext(contactContext)
    const text = useRef(" ")
    const {filterContacts, clearFilter, filtered} = contactContext;
    
    useEffect(() => {
        if(filtered === null ){
            text.current.value = ''
        }
    })

    const onChange = e => {
        if(text.current.value !== '') {
            contactContext.filterContacts(e.target.value)

        } else {
            contactContext.clearFilter();
        }
    }
    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Your Contacts" onChange={onChange}/>
        </form>
    )
}

export default ContactFilter 