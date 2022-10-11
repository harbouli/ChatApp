import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './Button'
import Input from './Input'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { postLogin } from '../../utils/api'
import { LoginParameters } from '../../utils/types'
import * as Loading from '../../utils/lotties/Loading.json'
import { getAuthUser } from '../../utils/api'


function LoginForm ()
{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading,

    };
    const navigate = useNavigate()
    const validation = Yup.object( {

        email: Yup.string()
            .required( 'Required' )
            .email( 'Email Format is Incorrect' ),
        password: Yup.string()
            .required( 'Required' )
            .min( 8, 'Password Must Contain At Least 8 Characters,' )

    } )
    return (
        <Formik initialValues={ {
            email: '',
            password: '',
        } }
            validationSchema={ validation }
            onSubmit={ async ( values: LoginParameters ) =>
            {
                try
                {
                    await postLogin( values )
                    await getAuthUser()
                    navigate( '/conversations' )
                } catch ( err )
                {
                    console.log( err );
                }

            } }>
            { ( form ) =>
                <Form className="w-200" >
                    <Input label="Email" name="email" type="text" />
                    <Input label="Password" name="password" type="password" />
                    <Button title='Login' type="submit" onClick={ () => form.handleSubmit() } />

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