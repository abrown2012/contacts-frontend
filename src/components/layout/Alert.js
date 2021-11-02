import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {

    const alertContext = useContext(AlertContext);

    return (
        alertContext.alert.length > 0 && alertContext.alert.map(a => (
            <div key={a.id} className={`alert alert-${a.type}`}>
                <i className="fas fa-info-circle"> {a.message}

                </i>
            </div>
        ))
    )
}

export default Alert 