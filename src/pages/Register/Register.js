import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { accessWithGoogle, registerWithMail } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirected_uri = location.state?.from || '/dashboard';

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const { fullName, email, password, checkPassword } = data;
        if (password !== checkPassword) {
            return window.alert(`Password Didn't Match!!!`);
        }

        registerWithMail(fullName, email, password, history, redirected_uri);
    };

    const handleAccessWithGoogle = () => {
        accessWithGoogle(history, redirected_uri);
    }
    return (
        <div>
            <div>
                <Container>
                    <div style={{width: '100%'}} className="mb-4">
                        <form style={{maxWidth: '400px', minWidth: '250px'}} className="form-sizing d-flex flex-column py-4 px-5 mx-auto shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="text-center mb-5 mt-4">Register</h3>

                            <label><strong>Enter Name</strong></label>
                            <input className="px-2 mt-2 mb-3" placeholder="John Son" {...register("fullName", { required: true })} />
                            {/* <input {...register("lastName", { required: true })} /> */}
                            <label><strong>Enter Email</strong></label>
                            <input className="px-2 mt-2 mb-3" placeholder="johnson24@gmail.com" type="email" {...register("email", { required: true })} />

                            <label><strong>Set Passsword</strong></label>
                            <input className="px-2 mt-2 mb-3" placeholder="Set a strong one!" type="password" {...register("password", { required: true })} />

                            <label><strong>Re-Enter Passsword</strong></label>
                            <input className="px-2 mt-2 mb-3" placeholder="Type your original again!" type="password" {...register("checkPassword", { required: true })} />

                            <div className="mx-auto"><input className="my-3" type="submit" value="Register" /></div>
                            <div>
                                <p className="border-top pt-2 mt-3 mb-0 text-center">Or, Sign Up With Google</p>
                                <div className="d-flex justify-content-center">
                                    <button onClick={handleAccessWithGoogle} className="mt-3 btn-google"><i className="fa-brands fa-google" /></button>
                                </div>
                                <div className="mt-4 mb-2 text-center">
                                    <p>Already Here? <Link to="/login">Login</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Register;