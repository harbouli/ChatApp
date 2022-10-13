import React from 'react';
import Lottie from 'react-lottie';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AuthenticationPage from './pages/AuthenticationPage';
import ConversationChannelPage from './pages/conversation/ConversationChannelPage';
import ConversationPage from './pages/conversation/ConversationPage';
import LoginPage from './pages/LoginPage';
import { useAuth } from './utils/hooks/useAuth';
import * as Loading from './utils/lotties/Loading.json'
import { RootState } from './store';
import { Socket, SocketContext } from './utils/websocket/SocketStore';

function App ()
{


  return (

    <SocketContext.Provider value={ Socket }>
      <Routes>

        <Route path="/signup" element={ <AuthenticationPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route
          path="conversations"
          element={
            <RequiredAuth>
              <ConversationPage />
            </RequiredAuth> }
        >
          <Route path=":id" element={ <ConversationChannelPage /> } />
        </Route>
      </Routes>
    </SocketContext.Provider>

  );
}

type Props = {
  children: React.ReactNode
}


const RequiredAuth: React.FC<Props> = ( { children } ) =>
{
  useAuth()
  const { loading, isAuth } = useSelector( ( state: RootState ) => state.user )
  const location = useLocation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,

  };


  if ( loading )
  {
    return <div className="flex items-center justify-center h-screen w-screen"><Lottie options={ defaultOptions }
      height={ 200 }
      width={ 200 }
    /></div>
  } else
  {
    if ( !isAuth ) return <Navigate to='/login' state={ { from: location } } replace />;

    return <>{ children }</>

  }
}
export default App;
