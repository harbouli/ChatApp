import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Conversation } from '../../utils/types'
import CreateConversationModal from '../models/CreateConversationModal'

import ChanneIteam from './ChanneIteam'
import CreateConversationButton from './CreateConversationButton'




const SideBar = () =>
{
    const allConversations = useSelector( ( state: RootState ) => state.conversations.conversations )
    const [ showModel, setShowModal ] = useState( false )

    return (
        <>
            { showModel && <CreateConversationModal onClick={ () => setShowModal( !showModel ) } /> }
            <aside className="  w-80   h-screen overflow-y-scroll scroller">
                <header className='bg-DARK w-full h-16 flex justify-between py-3 px-2 items-center border-b-[#96969632] border-solid border-b-[1px]'>
                    <h1 className='text-xl font-bold'>Conversations</h1>
                    <CreateConversationButton className=' cursor-pointer' showModel={ () => { setShowModal( !showModel ) } } />
                </header>
                <div className='scroller   '>
                    { allConversations.map( ( iteam, ) => <ChanneIteam key={ iteam.id } conversation={ iteam } /> ) }
                </div>
            </aside>
        </>
    )
}

export default SideBar