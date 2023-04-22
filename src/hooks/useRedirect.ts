


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from "../service/Path";

const useRedirect = () => {
  const navigate = useNavigate();

  const goToLogin = React.useCallback(() => 
    navigate(PATH.ConnectedAuthPath.login), [navigate]);

  const goToHome = React.useCallback(() => 
    navigate(PATH.ConnectedAuthPath.home) , [navigate]);

  const goToProfile = React.useCallback(() => 
    navigate(PATH.ConnectedAuthPath.profile) , [navigate]);
    
  const goToAdmin = React.useCallback(() => 
    navigate(PATH.AdminPath.admin), [navigate]);

  return {
    actions: {
      goToLogin,
      goToHome,
      goToProfile,
      goToAdmin
    }
  }
}

export default useRedirect;
