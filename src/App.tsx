import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AuthenticationPage from './pages/AuthenticationPage';
import ConversationChannelPage from './pages/conversation/ConversationChannelPage';
import ConversationPage from './pages/conversation/ConversationPage';
import LoginPage from './pages/LoginPage';

function App ()
{
  return (

    <Routes>
      <Route path="/signup" element={ <AuthenticationPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route
        path="conversations"
        element={ <ConversationPage /> }
      >
        <Route path=":id" element={ <ConversationChannelPage /> } />
      </Route>
    </Routes>

  );
}

export default App;
