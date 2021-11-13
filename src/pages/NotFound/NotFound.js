import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{minHeight: '46.5vh'}} className="text-center py-5">
            <h2>404 Not Found</h2>
            <p className="my-4">Return to <Link to="/">Home?</Link></p>
        </div>
    )
}

export default NotFound;