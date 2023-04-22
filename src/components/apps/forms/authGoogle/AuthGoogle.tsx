import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, joinWithGoogle } from '../../../../firebase/firebase';
import { Hooks } from '../../../../hooks';
import { Providers } from '../../../../providers';

import cls from "./index.module.scss";

interface IAuthGoogle {
  location: string
};

const AuthGoogle: React.FunctionComponent<IAuthGoogle> = ({location}) => {
  const { actions } = Hooks.useRedirect();
  const { setRender } = Providers.useAuth();
  const googleIcon = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";

  const handleAuthWithGoogle = () => {
    signInWithPopup(auth, joinWithGoogle)
      .then((res: any) => {
        localStorage.setItem("accessToken", res.user.accessToken);
        actions.goToHome();
        setRender("Reload!")
      })
  };

  return (
    <p className={cls.authGoogle} onClick={handleAuthWithGoogle}>
      {
        location === "signIn"
          ? "Or you can Log in with"
          : "Or you can Sign up with"
      }

      <img src={googleIcon} alt=''/>
    </p>
  )
}

export default AuthGoogle;
