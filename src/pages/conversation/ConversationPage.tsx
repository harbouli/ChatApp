import React from 'react'
import SideBar from '../../components/conversation/SideBar'
import { Outlet, useParams } from 'react-router-dom'
import ConvresationPanel from './ConvresationPanel';

function ConversationPage ()
{
    const { id } = useParams();
    return (
        <div className="flex overflow-y-hidden">
            <SideBar />
            { !id && <ConvresationPanel /> }
            <Outlet />
        </div>

    )
}

export default ConversationPage