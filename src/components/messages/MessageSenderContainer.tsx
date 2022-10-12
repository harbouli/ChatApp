import { formatRelative } from 'date-fns'
import React, { FC } from 'react'
import { Message } from '../../utils/types'


type Props = {
    message: Message
}
const MessageSenderContainer: FC<Props> = ( { message } ) =>
{
    return (
        <div className="flex gap-2 items-center justify-end">
            <div className='flex flex-col gap-1' >
                <div className="flex gap-2 items-center">
                    <div className=" text-xs text-gray-light">{ formatRelative( new Date( message.createdAt ), new Date() ) }</div>
                    <span className="font-bold text-sm">{ `${ message.author.firstName } ${ message.author.lastName } ` }</span>
                </div>
                <p className='text-center bg-blue px-4 py-2 rounded-full' >{ message.content }</p>
            </div>
            <div className="h-8 w-8 bg-red rounded-full " />
        </div>
    )
}

export default MessageSenderContainer