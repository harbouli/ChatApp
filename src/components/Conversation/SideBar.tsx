import React, { useState, FC } from 'react'
import { Conversation } from '../../utils/types'
import CreateConversationModal from '../models/CreateConversationModal'

import ChanneIteam from './ChanneIteam'
import CreateConversationButton from './CreateConversationButton'



type Props = {
    conversations: Conversation[] | undefined
}
const SideBar: FC<Props> = ( { conversations } ) =>
{
    const [ showModel, setShowModal ] = useState( false )

    return (
        <>
            { showModel && <CreateConversationModal onClick={ () => setShowModal( !showModel ) } /> }
            <aside className="  w-80  border-r-[#96969632] border-solid border-r-[1px] h-screen">
                <header className='bg-DARK w-full h-16 flex justify-between py-3 px-2 items-center border-b-[#96969632] border-solid border-b-[1px]'>
                    <h1 className='text-xl font-bold'>Conversations</h1>
                    <CreateConversationButton className=' cursor-pointer' showModel={ () => { setShowModal( !showModel ) } } />
                </header>
                <div className='scroller overflow-y-scroll h-full '>
                    { conversations?.map( ( iteam, i ) => <ChanneIteam key={ i } iteam={ iteam } /> ) }
                </div>
            </aside>
        </>
    )
}

export default SideBar