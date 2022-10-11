import React, { useEffect, useState } from 'react'
import SideBar from '../../components/conversation/SideBar'
import { Outlet, useParams } from 'react-router-dom'
import ConvresationPanel from './ConvresationPanel';
import { getConversations } from '../../utils/api';
import { Conversation } from '../../utils/types';

function ConversationPage ()
{
    const { id } = useParams();
    const [ conversation, setConversations ] = useState<Conversation[]>()
    useEffect( () =>
    {
        getConversations().then( ( { data } ) => setConversations( data ) ).catch( ( err ) => console.log( err ) )


    }, [] )

    return (
        <div className="flex overflow-y-hidden">
            <SideBar conversations={ conversation } />
            { !id && <ConvresationPanel /> }
            <Outlet />
        </div>

    )
}

export default ConversationPage