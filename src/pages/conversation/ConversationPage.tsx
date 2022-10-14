import React, { useEffect } from 'react'
import SideBar from '../../components/conversation/SideBar'
import { Outlet, useParams } from 'react-router-dom'
import ConvresationPanel from './ConvresationPanel';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchConversationsThunk } from '../../store/conversations/conversationThunk';
import { setConversation } from '../../store/messages/messagesSlice';


function ConversationPage ()
{
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>()

    useEffect( () =>
    {
        dispatch( fetchConversationsThunk() )
        dispatch( setConversation( parseInt( id! ) ) )
    }, [ id ] )


    return (
        <div className="flex overflow-y-hidden">
            <SideBar />
            { !id && <ConvresationPanel /> }
            <Outlet />
        </div>

    )
}

export default ConversationPage