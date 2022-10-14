import React, { FC, useState, useEffect } from 'react'
import { Conversation, User } from '../../utils/types'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { useNavigate } from 'react-router-dom'
import { setRecipient } from '../../store/messages/messagesSlice'


type Props = {
    conversation: Conversation
}

const ChanneIteam: FC<Props> = ( { conversation } ) =>
{
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [ userSender, setUserSender ] = useState<User>( {
        firstName: '',
        lastName: '',
        email: '',
        id: 0
    } )
    const { user } = useSelector( ( state: RootState ) => state )

    useEffect( () =>
    {
        return () =>
        {
            user.user.id === conversation.creator.id ? setUserSender( conversation.recipient ) : setUserSender( conversation.creator )

        }
    }, [] )





    return (
        <div onClick={ () =>
        {
            navigate( `${ conversation.id }` )
            dispatch( setRecipient( `${ userSender.firstName } ${ userSender.lastName }` ) )

        } } className=" flex items-center py-4 px-3 gap-5 bg-DARK hover:bg-[#3d3d3d67] border-b-[#96969632] border-solid border-b-[1px]">
            <div className=" w-8 h-8 bg-blue rounded-full " />
            <div>
                <p className="font-semibold">{ `${ userSender.firstName } ${ userSender.lastName }` }</p>
                <p className=" text-xs opacity-75">hello</p>
            </div>
        </div>
    )
}

export default ChanneIteam