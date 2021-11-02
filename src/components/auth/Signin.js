import React, {useState} from 'react'

const Signin = () => {

    const [user, setUser] = useState({
        email: '', 
        password: ''
    })

    const {email, password} = user;

    const onChange = e => setUser({...user, [e.targe.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefualt();
        console.log("Feel free to log in")
    }

    return (
        <div className='form-container'>
            <h1>
                <span className='text-primary'>Sign In</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}></input>
                </div>
                <input type="submit" value="Sign In" className="btn btn-primary btn-block"></input>
            </form>
        </div>
    )
}

export default Signin