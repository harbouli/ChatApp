import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import Input from './Input'

function LoginForm ()
{
    return ( <form className="w-200">
        <Input label="Email" name="email" />
        <Input label="Password" name="password" />
        <Button title="Login" />
        <div className='flex justify-center mt-2'>
            <span>Don't have an account? </span>
            <Link to="/" className=" no-underline">
                <span className="font-bold"> Register</span>
            </Link>
        </div>

    </form>
    )
}

export default LoginForm