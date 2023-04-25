import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-xs mx-4">Sign Out</button>
                    </>
                        : <button className="normal-case text-xl">Sign in first</button>
                }
            </div>

        </div>
    );
};

export default Header;