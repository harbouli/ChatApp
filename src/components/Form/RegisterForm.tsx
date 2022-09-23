import React from 'react'
import Input from './Input'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function RegisterForm ()
{
    return (
        <form className="w-200">
            <Input label="Email" name="email" />
            <section className='flex gap-2 mt-2 justify-between'>
                <Input label="First Name" name='firstname' />
                <Input label="Last Name" name='lastName' />
            </section>
            <Input label="Password" name="password" />
            <Button title="Create New Account" />
            <div className='flex justify-center mt-2'>
                <span>Already have an account? </span>
                <Link to="/login">
                    <span className="font-bold">Login</span>
                </Link>
            </div>

        </form>
    )
}

export default RegisterForm