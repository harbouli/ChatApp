import React, { FC } from 'react'

type Props = {
    fullName: string
}
const MessageInputField: FC<Props> = ( { fullName } ) => 
{

    return (

        <input placeholder={ `Write a Message To  ${ fullName }` } className=" border-none bg-[#101010] outline-none w-full text-[#fff] p-4 px-2 rounded-lg" />

    )
}

export default MessageInputField