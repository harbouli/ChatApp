import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

function TopBar ()
{
    const { recipient } = useSelector( ( state: RootState ) => state.messages )
    return (
        <div className='text-2xl font-bold h-11 justify-center'>{ recipient }</div>
    )
}

export default TopBar