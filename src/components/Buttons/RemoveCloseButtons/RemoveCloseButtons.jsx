import React from 'react';
import { Button } from 'react-bootstrap';


const RemoveCloseButtons = () => {
    return (
        <Button variant="light" className='btn-outline-danger'>
            <i className="bi bi-trash "></i>
        </Button>

    );
}

export default RemoveCloseButtons;
