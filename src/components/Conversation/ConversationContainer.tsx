import React, { useEffect } from 'react'
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
    <div className="h-full overflow-y-scroll scroller flex  flex-col-reverse gap-3 fade-indecator">
      { messages.messages.map( ( message, i, arr ) =>
      {
        const currentMessage = arr[ i ]
        const nextMessage = arr[ i + 1 ]
        if ( arr.length !== i + 1 )
        {

          if ( user.user.id !== message.author.id )
          {
            if ( currentMessage.author.id !== nextMessage.author.id ) return <MessageContainer key={ message.id } sameAuthor={ true } message={ message } />
            return <MessageContainer key={ message.id } sameAuthor={ true } message={ message } />
          }

          else
          {
            if ( currentMessage.author.id !== nextMessage.author.id )
              return <MessageSenderContainer key={ message.id } sameAuthor={ false } message={ message } />

            return <MessageSenderContainer key={ message.id } sameAuthor={ true } message={ message } />
          }
        } else
        {
          if ( user.user.id !== message.author.id )
            return <MessageContainer key={ message.id } sameAuthor={ false } message={ message } />

          else return <MessageSenderContainer key={ message.id } sameAuthor={ false } message={ message } />
        }


      } ) }

    </div>
  )
}

export default ConversationContainer