import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { accessWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirected_uri = location.state?.from || '/';

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    const handleAccessWithGoogle = () => {
        accessWithGoogle(history, redirected_uri);
    }
    
    return (
        <div>
            <div>
                <Container>
                    <div style={{width: '100%'}} className="my-4">
                        <form style={{maxWidth: '400px', minWidth: '250px'}} className="form-sizing d-flex flex-column py-4 px-5 mx-auto shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="text-center mb-4 mt-3">Login</h4>
                            {/* <input {...register("fullName", { required: true })} />
                            <input {...register("lastName", { required: true })} /> */}
                            <label><strong>Enter Email</strong></label>
                            <input className="mt-2 mb-3" placeholder="example@provider.com" type="email" {...register("email", { required: true })} />

                            <label><strong>Enter Passsword</strong></label>
                            <input className="mt-2 mb-3" placeholder="Enter Password" type="password" {...register("password", { required: true })} />

                            <div className="mx-auto"><input className="mt-2 mb-4" type="submit" value="Login" /></div>
                            <div>
                                <p className="mt-2 mb-0 text-center">Or, Sign In With Google</p>
                                <div className="d-flex justify-content-center">
                                    <button onClick={handleAccessWithGoogle} className="mt-3 btn-google"><i className="fa-brands fa-google" /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Login;