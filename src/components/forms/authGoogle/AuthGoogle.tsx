


import React from 'react';

import cls from "./index.module.scss";

interface IAuthGoogle {
  location: string
};

const AuthGoogle: React.FunctionComponent<IAuthGoogle> = ({location}) => {
  const googleIcon = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png";

  const handleAuthWithGoogle = () => {

  }

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
