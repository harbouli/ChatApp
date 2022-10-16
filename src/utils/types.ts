export type RegisterParameters = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type LoginParameters = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

export type AuthUser = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  isAuth: boolean;
};

export type Conversation = {
  id: number;
  creator: User;
  recipient: User;
  createdAt: Date;
  lastMessage: Message;
};
export type Message = {
  id: number;
  content: string;
  author: User;
  createdAt: Date;
};

export type MessageEventPayload = {
  author: User;
  content: string;
  createdAt: Date;
  id: number;
  conversation: Conversation;
};

export type createMessage = {
  content: string;
  conversationId: number;
};
export type fetchMessagePayload = {
  conversationId: number;
  messages: Message[];
};
