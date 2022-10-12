import React, { FC, useEffect } from 'react'
import { RootState } from '../../store'
import { Message } from '../../utils/types'
import { useSelector } from 'react-redux'
import MessageContainer from '../messages/MessageContainer'
import MessageSenderContainer from '../messages/MessageSenderContainer'
type Props = {
  messages: Message[]
}

const ConversationContainer = () =>
{
  const { messages, user } = useSelector( ( state: RootState ) => state )



  return (
    <div className="h-full overflow-y-scroll scroller flex  flex-col-reverse gap-3">
      { messages.messages.map( ( message ) =>
      {
        if ( user.user.id != message.author.id ) return <MessageContainer key={ message.id } message={ message } />
        else return <MessageSenderContainer key={ message.id } message={ message } />
      } ) }

    </div>
  )
}

export default ConversationContainer