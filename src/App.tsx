import React from 'react';
import Lottie from 'react-lottie';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import AuthenticationPage from './pages/AuthenticationPage';
import ConversationChannelPage from './pages/conversation/ConversationChannelPage';
import ConversationPage from './pages/conversation/ConversationPage';
import LoginPage from './pages/LoginPage';
import { useAuth } from './utils/hooks/useAuth';
import * as Loading from './utils/lotties/Loading.json'

function App ()
{


  return (

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

  );
}

type Props = {
  children: React.ReactNode
}


const RequiredAuth: React.FC<Props> = ( { children } ) =>
{
  const { user, loading } = useAuth()
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
    if ( !user ) return <Navigate to='/login' state={ { from: location } } replace />;

    return <>{ children }</>

  }
}
export default App;
