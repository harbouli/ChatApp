import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { createMessages } from '../../utils/api'

type Props = {
    fullName?: string
}
const MessageInputField: FC<Props> = () => 
{
    const { conversationId, recipient } = useSelector( ( state: RootState ) => state.messages )

    const [ content, setContent ] = useState<string>( '' )
    const sendMessage = ( e: React.FocusEvent<HTMLFormElement> ) =>
    {
        e.preventDefault()
        createMessages( { content, conversationId } )
        setContent( '' )

    }


    return (
        <form onSubmit={ sendMessage }>
            <input
                value={ content }
                onChange={
                    ( val ) =>
                    {
                        setContent( val.target.value )
                    }
                } placeholder={ `Write a Message To  ${ recipient }` } className=" border-none bg-[#101010] outline-none w-full text-[#fff] p-4 px-2 rounded-lg" />
        </form>
    )
}

export default MessageInputField