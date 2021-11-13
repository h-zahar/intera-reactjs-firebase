import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading, isAdminLoading} = useAuth();
    if (isLoading || isAdminLoading)
    {
        return <div style={{minHeight: '80vh'}} className="d-flex justify-content-center mt-4"><Spinner animation="grow" variant="dark" /></div>
    }
    return (
        <Route
            {...rest}
            render = {({location}) => 
            user?.email ?
            children :
            <Redirect
            to={{
                pathname: '/login',
                state: {from: location}
            }} />
            }
        >
            
        </Route>
    )
}

export default PrivateRoute;