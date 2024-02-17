import React from 'react';
import { Button } from 'react-bootstrap';
import { LOGIN_ROUTE } from '../../../utils/Paths';
import { useNavigate } from 'react-router-dom';


const LogoutButtons = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate(LOGIN_ROUTE);
    };
    return (
        <Button variant='danger' onClick={logout}>
            Выйти
        </Button>
    );
}

export default LogoutButtons;
