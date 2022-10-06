import React, { FC } from 'react'
import { MdPostAdd } from 'react-icons/md'


type Props = {
    showModel: () => void,
    className: string,
}

const CreateConversationButton: FC<Props> = ( { showModel, className } ) =>
{
    return (
        <div onClick={ showModel }>
            <MdPostAdd className={ className } size={ 25 } />
        </div>
    )
}

export default CreateConversationButton