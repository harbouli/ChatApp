import { ErrorMessage, useField } from 'formik'
import React from 'react'

function Input ( { label, ...props }: any )
{
    const [ field, meta ] = useField( props )
    return (
        <div className={ `bg-DARK py-3 px-4 my-1 rounded-xl w-full ${ meta.error && meta.touched && 'border-2 border-red ' }` }>
            <div className="flex justify-between">
                { label && <label htmlFor={ field.name } className="text-gray block text-sm my-1 ">{ label }</label> }
                <ErrorMessage name={ field.name } render={ msg => <p className='text-red text-xs'>{ msg }</p> } />

            </div>
            <input { ...props } { ...field } autoComplete="off" className="outline-none border-none bg-inherited text-lg w-full p-0 " />
        </div>
    )
}

export default Input