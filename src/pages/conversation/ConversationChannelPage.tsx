import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppDispatch } from '../../store'
import { useDispatch } from 'react-redux';
import { fetchMessagesThunk } from '../../store/messages/messagesThunk';

function ConversationChannelPage ()
{
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    useEffect( () =>
    {
        dispatch( fetchMessagesThunk( parseInt( id! ) ) )
    }, [ id ] )
    return (
        <div className=''>
            ConversationChannelPage

        </div>
    )
}

export default ConversationChannelPage