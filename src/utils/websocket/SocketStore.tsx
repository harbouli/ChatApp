import { createContext } from "react";
import { io } from "socket.io-client";

export const Socket = io( process.env.REACT_APP_WEBSOCKET_URL!, { withCredentials: true } );
export const SocketContext = createContext( Socket );
