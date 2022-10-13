import React, { useEffect, useContext } from 'react'
import SideBar from '../../components/conversation/SideBar'
import { Outlet, useParams } from 'react-router-dom'
import ConvresationPanel from './ConvresationPanel';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchConversationsThunk } from '../../store/conversations/conversationThunk';
import { SocketContext } from '../../utils/websocket/SocketStore';

function ConversationPage ()
{
    const socket = useContext( SocketContext )
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>()
    useEffect( () =>
    {
        dispatch( fetchConversationsThunk() )
    }, [] )

    useEffect( () =>
    {
        socket.on( 'connected', () => console.log( 'Conncted' ) )
        socket.on( 'onMessage', ( msg ) => console.log( msg ) )
        dispatch( fetchConversationsThunk() )
        return () =>
        {
            socket.off( 'connect' )
            socket.off( 'onMessage' )
        }
    }, [] )

    return (
        <div className="flex overflow-y-hidden">
            <SideBar />
            { !id && <ConvresationPanel /> }
            <Outlet />
        </div>

    )
}

export default ConversationPage