import React, { useState } from 'react'
import Input from './Input'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { Form, Formik } from 'formik';


function RegisterForm ()
{

    const validation = Yup.object( {
        firstname: Yup.string()
            .required( 'Required' )
            .max( 15, 'Please Enter Less Than 15 Character In Your First Name' ),
        lastname: Yup.string()
            .required( 'Required' )
            .max( 20, 'Please Enter Less Than 20 Character In Your Last Name' ),
        email: Yup.string()
            .required( 'Required' )
            .email( 'Email Format is Incorrect' ),
        password: Yup.string()
            .required( 'Required' )
            .min( 8, 'Password Must Contain At Least 8 Characters,' )
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                " One Uppercase, One Number And One Special Case Character"
            ),
    } )

    return (
        <Formik
            initialValues={ {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
            } }
            validationSchema={ validation }
            onSubmit={ ( values: object ) =>
            {
                console.log( values );

            } }
        >
            { ( form ) =>
                <Form className="max-w-4xl w-200" >
                    <Input label="Email" name="email" />
                    <section className='flex gap-2 mt-2 justify-between'>
                        <Input label="First Name" name="firstname" type="text" />
                        <Input label="Last Name" name="lastname" type="text" />
                    </section>
                    <Input label="Password" name="password" type="password" />

                    <Button title="Create New Account" type="submit" />
                    <div className='flex justify-center mt-2'>
                        <span>Already have an account? </span>
                        <Link to="/login">
                            <span className="font-bold">Login</span>
                        </Link>
                    </div>
                </Form> }
        </Formik>
    )
}

export default RegisterForm