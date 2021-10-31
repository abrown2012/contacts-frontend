import React from 'react'

const ContactItem = ({contact}) => {

    const {id, name, email, phone, type} = contact;

    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                {name}{' '} 
                <span style={{ float: 'right'}} className={'badge' + (type === 'professional' ? 'budge-success' : 'budge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span> 
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <i className="fas fa-envelope-open-text"></i> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone-alt"></i> {email}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ContactItem 