import React, { FC, useEffect } from 'react'
import CreateConversation from '../Form/CreateConversation'
import OverLay from './OverLay'



type Props = {
    onClick: () => void
}




const CreateConversationModal: FC<Props> = ( { onClick } ) =>
{

    return (
        <>< CreateConversation toggleModel={ onClick } />
            <OverLay toggleModel={ onClick }></OverLay>
        </> )
}

export default CreateConversationModal