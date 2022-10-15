import React, { useEffect } from 'react'
import SideBar from '../../components/conversation/SideBar'
import { Outlet, useParams } from 'react-router-dom'
import ConvresationPanel from './ConvresationPanel';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchConversationsThunk } from '../../store/conversations/conversationThunk';
import { setRecipient } from '../../store/messages/messagesSlice';


function ConversationPage ()
{
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>()
    const { user } = useSelector( ( state: RootState ) => state )

    useEffect( () =>
    {
        dispatch( fetchConversationsThunk() ).unwrap().then( ( { data } ) =>
        {
            if ( id )
            {
                const conversation = data.find( c => c.id === parseInt( id! ) )
                conversation?.creator.id == user.user.id ? dispatch( setRecipient( `${ conversation.recipient.firstName } ${ conversation.recipient.lastName }` ) ) :
                    dispatch( setRecipient( `${ conversation?.creator.firstName } ${ conversation?.creator.lastName }` ) )
            }
        } )


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