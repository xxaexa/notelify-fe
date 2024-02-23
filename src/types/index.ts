import React, { ChangeEvent } from "react";

// Redux
export interface INoteRequest {
  title: string | undefined;
  description: string | undefined;
  _id?: string;
}

export interface INoteResponse {
  title: string | undefined;
  description: string | undefined;
  _id: string;
  user_id: number;
  user_name: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  email: string | undefined;
  username?: string | undefined;
  password: string | undefined;
}

export interface IUserRequest {
  _id?: number | undefined;
  email: string | undefined;
  username?: string | undefined;
  password: string | undefined;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface User {
  _id: number;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
  last_login_at: null;
  two_factor_secret: null;
  two_factor_recovery_codes: null;
}

export interface IUserResponse {
  message: string;
  user: User;
  access_token: string;
  token_type: string;
}

// Components

export interface BoxProps {
  id: string | undefined;
  title: string | undefined;
  content: string | undefined;
}

export interface TextProps {
  text: string | undefined;
}

export interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface InputProps {
  type: string;
  name: string;
  value: string | undefined;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FormAuthState {
  _id?: string | number;
  email: string;
  username?: string;
  password: string;
}

export interface FormAuthProps {
  pageType: string;
  initialState: FormAuthState;
  handleDelete?: () => void;
  onSubmit: (values: FormAuthState) => void;
}

export interface FormNoteProps {
  pageType: string;
  initialState: INoteRequest;
  handleDelete?: () => void;
  onSubmit: (values: INoteRequest) => void;
}

export interface WrapperProps {
  children: React.ReactNode;
}

export interface NavigateButtonProps {
  icon: React.ReactNode;
  text: string;
  url: string;
}

export interface DeleteButtonProps {
  handleDelete: () => void;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

export interface IconSubmitProps {
  icon?: React.ReactNode;
  text: string;
}
