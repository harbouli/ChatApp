import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessagesThunk } from '../../store/messages/messagesThunk';
import ConversationContainer from '../../components/conversation/ConversationContainer';
import MessageInputField from '../../components/messages/MessageInputField';

function ConversationChannelPage ()
{
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    useEffect( () =>
    {
        dispatch( fetchMessagesThunk( parseInt( id! ) ) )
    }, [ id ] )
    return (
        <div className="flex flex-col w-full px-3 py-4 h-screen gap-3">
            <ConversationContainer />
            <MessageInputField fullName='Mohamed Harbouli' />
        </div>
    )
}

export default ConversationChannelPage