import React, { useState } from 'react'
import Input from './Input'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { Form, Formik } from 'formik';
import { RegisterParameters } from '../../utils/types'
import { postRegister } from '../../utils/api'


function RegisterForm ()
{

    const validation = Yup.object( {
        firstName: Yup.string()
            .required( 'Required' )
            .max( 15, 'Please Enter Less Than 15 Character In Your First Name' ),
        lastName: Yup.string()
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
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            } }
            validationSchema={ validation }
            onSubmit={ async ( values: RegisterParameters ) =>
            {
                try
                {
                    console.log( values )
                    await postRegister( values )
                } catch ( error )
                {
                    console.log( error );
                }


            } }
        >
            { ( form ) =>
                <Form className="max-w-4xl w-200" >
                    <Input label="Email" name="email" />
                    <section className='flex gap-2 mt-2 justify-between'>
                        <Input label="First Name" name="firstName" type="text" />
                        <Input label="Last Name" name="lastName" type="text" />
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