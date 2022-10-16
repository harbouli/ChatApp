import { formatRelative } from 'date-fns'
import React, { FC } from 'react'
import { Message } from '../../utils/types'


type Props = {
    message: Message
    sameAuthor?: boolean
}
const MessageSenderContainer: FC<Props> = ( { message, sameAuthor } ) =>
{
    return (
        <div className="flex gap-2 items-center justify-end">

            <div className='flex flex-col gap-1' >
                { !sameAuthor &&
                    <div className="flex gap-2 items-center justify-end">
                        <span className=" text-xs text-gray-light">{ formatRelative( new Date( message.createdAt ), new Date() ) }</span>
                        <span className="font-bold text-sm">{ `${ message.author.firstName } ${ message.author.lastName } ` }</span>
                    </div> }
                <div>
                    <p className={ `text-center ${ sameAuthor && 'mr-10' } bg-blue px-4 py-2 rounded-4xl breck-all` }>{ message.content }</p>
                </div>
            </div>
            { !sameAuthor && <div className="h-8 w-8 bg-red rounded-full " /> }
        </div>
    )
}

export default MessageSenderContainer