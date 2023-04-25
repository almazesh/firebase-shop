import React from "react"
import { UserMetadata } from "firebase/auth"



export type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>

export interface IFireConfig {
  apiKey: string,
  authDomain: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string
}


export interface IUser {
  displayName: string
  avatar: string
  email: string
  dates: UserMetadata | undefined
}

export interface IContext {
  token: string | null | undefined
  user: IUser | null
  setRender: TypeSetState<string>
  signOut: React.MouseEventHandler<HTMLButtonElement>
  state: string | null
  setState: TypeSetState<string | null>
  changeState: React.RefCallback<any>
}
