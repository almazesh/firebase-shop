
import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from '../firebase/firebase.config';
import { IUser } from '../types/types';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Hooks } from '../hooks';

interface IProvider {
  children: React.ReactNode
}

const AuthProvider: React.FunctionComponent<IProvider> = ({children}) => {
  const [user, setUser] = React.useState<IUser | null>(null);
  const [token, setToken] = React.useState<string | null | undefined>(null);
  const [render, setRender] = React.useState<string>("");
  const [state,setState] = React.useState<string | null>("screen");
  const { actions } = Hooks.useRedirect();

  React.useEffect(() => {
    if(!localStorage.getItem("state")) {
      localStorage.setItem("state", "screen")
    } else {
      const st = localStorage.getItem("state");
      setState(st);
    }
  }, [state]); 

  const changeState = React.useCallback((st: string) => {
    localStorage.setItem("state", st);
    setState(st);
    
    switch(st) {
      case "screen":
        actions.goToHome();
        break
      case "web": 
        actions.goToHome();
        break
      case "admin":
        actions.goToAdmin();
        break
      default:
        actions.goToHome();
    }

  }, [actions]);

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("accessToken");
    if(tokenData) {
      setToken(tokenData);
    } else {
      setToken(undefined)
    }
  }, []);

  const getUser = React.useCallback(() => {
    onAuthStateChanged(auth, res => {
      setUser({
        displayName: res?.displayName || "",
        email: res?.email || "",
        avatar: res?.photoURL || "",
        dates: res?.metadata
      })
    })
  }, []);

  const logOut = React.useCallback(() => {
    localStorage.clear();
    setUser(null);
    setToken(undefined);
    setRender("Exit!");
    changeState("screen");
    signOut(auth);
  }, [changeState]); 

  React.useEffect(() => {
    getToken();
    getUser();
  }, [getToken, getUser, render]);

  const values = React.useMemo(() => ({
    token,
    user,
    setRender,
    logOut,
    state,
    setState,
    changeState,
    render
  }), 
    [
      token,
      user,
      setRender,
      logOut,
      state,
      setState,
      changeState,
      render
    ]
  );

  return (
    <React.Fragment>
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default AuthProvider;