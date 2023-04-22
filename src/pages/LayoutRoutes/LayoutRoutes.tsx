
import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Components } from '../../components/apps';
import { Hooks } from '../../hooks';
import { Providers } from '../../providers';
import { PATH } from '../../service/Path';
import { LayoutPages } from '../Lazy';

const LayoutRoutes: React.FunctionComponent = () => {
  const { token } = Providers.useAuth();
  const { actions } = Hooks.useRedirect();

  React.useEffect(() => {
    if(token === undefined) {
      actions.goToLogin();
    }
  }, [token]);


  if(!token) return <Components.Loader fullHeight={"50vh"}/>

  return (
    <React.Fragment>
      <Switch>
        <Route path={PATH.ConnectedAuthPath.home} element={<LayoutPages.Main />}/>
        <Route path={PATH.ConnectedAuthPath.profile} element={<LayoutPages.Profile />}/>
        <Route path={PATH.ConnectedAuthPath.products} element={<LayoutPages.Products />}/>
      </Switch>
    </React.Fragment>
  )
}

export default LayoutRoutes;
