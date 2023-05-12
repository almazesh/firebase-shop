import React from "react"
import { UserMetadata } from "firebase/auth"



export type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>

export interface IFireConfig {
  apiKey: string | undefined,
  authDomain: string | undefined,
  projectId: string | undefined,
  storageBucket: string | undefined,
  messagingSenderId: string | undefined,
  appId: string | undefined
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
  logOut: React.MouseEventHandler<HTMLButtonElement>
  state: string | null
  setState: TypeSetState<string | null>
  changeState: React.RefCallback<any>
  render: string
}

export interface ISliderDots {
  cls: any
  i: number
  currentSlider: number
  setCurrentSlider: TypeSetState<number>
}