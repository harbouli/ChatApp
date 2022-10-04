import React from 'react'
import { MdPostAdd } from 'react-icons/md'
import ChanneIteam from './ChanneIteam'
function SideBar ()
{
    const channel = [
        { id: '1', name: 'Mohamed Harbouli', lastMessage: 'Hello Mohamed I  ...' },
        { id: '2', name: 'Amjad Harbouli', lastMessage: 'Hi You!' },
        { id: '3', name: 'Bahae Harbouli', lastMessage: '♥' },
        { id: '1', name: 'Mohamed Harbouli', lastMessage: 'Hello Mohamed I  ...' },
        { id: '2', name: 'Amjad Harbouli', lastMessage: 'Hi You!' },
        { id: '3', name: 'Bahae Harbouli', lastMessage: '♥' },
        { id: '1', name: 'Mohamed Harbouli', lastMessage: 'Hello Mohamed I  ...' },
        { id: '2', name: 'Amjad Harbouli', lastMessage: 'Hi You!' },
        { id: '3', name: 'Bahae Harbouli', lastMessage: '♥' },
        { id: '1', name: 'Mohamed Harbouli', lastMessage: 'Hello Mohamed I  ...' },
        { id: '2', name: 'Amjad Harbouli', lastMessage: 'Hi You!' },
        { id: '3', name: 'Bahae Harbouli', lastMessage: '♥' },
        { id: '1', name: 'Mohamed Harbouli', lastMessage: 'Hello Mohamed I  ...' },
        { id: '2', name: 'Amjad Harbouli', lastMessage: 'Hi You!' },
        { id: '3', name: 'Bahae Harbouli', lastMessage: '♥' },
    ]
    return (

        <aside className="  w-60  border-r-[#96969632] border-solid border-r-[1px] h-screen">
            <header className='bg-DARK w-full h-16 flex justify-between py-3 px-2 items-center border-b-[#96969632] border-solid border-b-[1px]'>
                <h1 className='text-xl font-bold'>Conversations</h1>
                <MdPostAdd size={ 25 } />
            </header>
            <div className='scroller overflow-y-scroll h-full '>
                { channel.map( ( iteam, i ) => <ChanneIteam key={ i } iteam={ iteam } /> ) }
            </div>
        </aside>

    )
}

export default SideBar