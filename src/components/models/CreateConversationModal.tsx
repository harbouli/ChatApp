import React, { FC } from 'react'
import CreateConversation from '../Form/CreateConversation'
import OverLay from './OverLay'



type Props = {
    onClick: () => void
}

const CreateConversationModal: FC<Props> = ( { onClick } ) =>
{
    return (
        <>< CreateConversation />
            <OverLay toggleModel={ onClick }></OverLay>
        </> )
}

export default CreateConversationModal