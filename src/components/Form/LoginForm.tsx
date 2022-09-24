import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import Input from './Input'
import * as Yup from 'yup'
import { ErrorMessage, Form, Formik, useField } from 'formik'


function LoginForm ()
{
    const validation = Yup.object( {

        email: Yup.string()
            .required( 'Required' )
            .email( 'Email Format is Incorrect' ),
        password: Yup.string()
            .required( 'Required' )
            .min( 8, 'Password Must Contain At Least 8 Characters,' )

    } )
    const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => event.preventDefault()
    return (
        <Formik initialValues={ {
            email: '',
            password: '',
        } }
            validationSchema={ validation }
            onSubmit={ ( values: object ) =>
            {
                console.log( values );

            } }>
            <Form className="w-200" onSubmit={ onSubmit }>
                <Input label="Email" name="email" type="text" />
                <Input label="Password" name="password" type="password" />
                <Button title="Login" />
                <div className='flex justify-center mt-2'>
                    <span>Don't have an account? </span>
                    <Link to="/" className=" no-underline">
                        <span className="font-bold"> Register</span>
                    </Link>
                </div>

            </Form >
        </Formik>
    )
}

export default LoginForm