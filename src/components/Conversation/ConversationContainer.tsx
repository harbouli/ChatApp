import React, { useEffect, useContext } from 'react'
import { AppDispatch, RootState } from '../../store'
import { Message, MessageEventPayload } from '../../utils/types'
import { useSelector, useDispatch } from 'react-redux'
import MessageContainer from '../messages/MessageContainer'
import MessageSenderContainer from '../messages/MessageSenderContainer'
import { SocketContext } from '../../utils/websocket/SocketStore'
import { setMessage } from '../../store/messages/messagesSlice'
import { updateConversation } from '../../store/conversations/conversationSlice'
type Props = {
  messages: Message[]
}

const ConversationContainer = () =>
{
  const socket = useContext( SocketContext )
  const dispatch = useDispatch<AppDispatch>()
  const { messages, user } = useSelector( ( state: RootState ) => state )
  useEffect( () =>
  {
    socket.on( 'connected', () => console.log( 'Conncted' ) )
    socket.on( 'onMessage', ( msg: MessageEventPayload ) =>
    {
      console.log( msg );
      const { conversation, ...message } = msg

      console.log( conversation )
      dispatch( setMessage( message ) )
      dispatch( updateConversation( conversation ) )

    } )
    return () =>
    {
      socket.off( 'connect' )
      socket.off( 'onMessage' )
    }
  }, [] )




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
            if ( currentMessage.author.id !== nextMessage.author.id ) return <MessageContainer key={ i } sameAuthor={ false } message={ message } />
            return <MessageContainer key={ i } sameAuthor={ true } message={ message } />
          }

          else
          {
            if ( currentMessage.author.id !== nextMessage.author.id )
              return <MessageSenderContainer key={ i } sameAuthor={ false } message={ message } />

            return <MessageSenderContainer key={ i } sameAuthor={ true } message={ message } />
          }
        } else
        {
          if ( user.user.id !== message.author.id )
            return <MessageContainer key={ i } sameAuthor={ false } message={ message } />

          else return <MessageSenderContainer key={ i } sameAuthor={ false } message={ message } />
        }


      } ) }

    </div>
  )
}

export default ConversationContainer