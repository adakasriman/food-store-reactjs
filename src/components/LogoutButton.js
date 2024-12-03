import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const LogoutButton = () => {
    const navigate = useNavigate();
    const logOut = () => {
        Cookies.set('username', '', { expires: 1 });
        navigate('/login');
    }
    return (
        <button className="btn btn-danger w-100" onClick={logOut}>
            Logout
        </button>
    )
}

export default LogoutButton