import React, { FC } from 'react'
import { Message } from '../../utils/types'
import { formatRelative } from 'date-fns'

type Props = {
    message: Message
    sameAuthor?: boolean
}
const MessagesContainer: FC<Props> = ( { message, sameAuthor } ) =>
{
    return (
        <div className="flex gap-2 items-center -z-10">
            { !sameAuthor && <div className="h-8 w-8 bg-red rounded-full " /> }

            <div className='flex flex-col gap-1' >
                { !sameAuthor &&
                    <div className="flex gap-2 items-center">
                        <span className="font-bold text-sm">{ `${ message.author.firstName } ${ message.author.lastName } ` }</span>
                        <span className=" text-xs text-gray-light">{ formatRelative( new Date( message.createdAt ), new Date() ) }</span>
                    </div> }
                <p className={ `text-center ${ sameAuthor && 'ml-10' } bg-gray-dark px-4 py-2 rounded-2xl break-words breck-all` }>{ message.content }</p>
            </div>
        </div>
    )
}

export default MessagesContainer