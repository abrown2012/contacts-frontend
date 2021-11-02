import React, {useState} from 'react'

const Signup = () => {

    const [user, setUser] = useState({
        username: '', 
        email: '', 
        password: ''
    })

    const {username, email, password} = user;

    const onChange = e => setUser({...user, [e.targe.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefualt();
        
    }

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Sign Up</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}></input>
                </div>
                <input type="submit" value="Sign Up" className="btn btn-primary btn-block"></input>
            </form>
        </div>
    )
}

export default Signup