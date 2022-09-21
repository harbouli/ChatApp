import React from 'react'
import Input from './Input'
import { Button } from './Button'

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

        </form>
    )
}

export default RegisterForm