import React from 'react'

function Input ( { label, name, ...props }: any )
{
    return (
        <div className="bg-DARK py-3 px-4 my-1 rounded-xl w-full">
            <label htmlFor={ name } className="text-gray block text-sm my-1 ">{ label }</label>
            <input type={ name } id={ name } className="outline-none border-none bg-inherited text-lg w-full p-0 " />
        </div>
    )
}

export default Input