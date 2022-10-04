import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import Input from './Input'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { postLogin } from '../../utils/api'
import { LoginParameters } from '../../utils/types'


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
            onSubmit={ async ( values: LoginParameters ) =>
            {
                console.log( values );
                try
                {
                    await postLogin( values )
                } catch ( err )
                {
                    console.log( err );
                }

            } }>
            { ( form ) =>
                <Form className="w-200" onSubmit={ onSubmit }>
                    <Input label="Email" name="email" type="text" />
                    <Input label="Password" name="password" type="password" />
                    <Button title="Login" type="submit" onClick={ () => form.handleSubmit() } />
                    <div className='flex justify-center mt-2'>
                        <span>Don't have an account? </span>
                        <Link to="/signup" className=" no-underline">
                            <span className="font-bold"> Register</span>
                        </Link>
                    </div>

                </Form > }
        </Formik>
    )
}

export default LoginForm