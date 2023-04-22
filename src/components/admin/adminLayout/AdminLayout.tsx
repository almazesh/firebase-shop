import React from 'react';
import { AdminComponents } from '..';
import { Route, Routes as Switch} from 'react-router-dom';
import { PATH } from '../../../service/Path';
import { Providers } from '../../../providers';
import { Hooks } from '../../../hooks';

const AdminLayout: React.FunctionComponent<any> = () => {
  const { state } = Providers.useAuth();
  const { actions } = Hooks.useRedirect();

  React.useEffect(() => {
    if(state === "admin") {
      actions.goToAdmin();
    }
  }, [state]);

  return (
    <React.Fragment>
      <section className="admin-layout">
        <aside>
          <AdminComponents.Sidebar />
        </aside>
        <main>
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path={PATH.AdminPath.profile} element={<h1>Profile</h1>}/>
              <Route path={PATH.AdminPath.category} element={<h1>Category</h1>}/>
              <Route path={PATH.AdminPath.products} element={<h1>Products</h1>}/>
              <Route path={PATH.AdminPath.contacts} element={<h1>Contacts</h1>}/>
              <Route path={PATH.AdminPath.slider} element={<h1>Slider</h1>}/>
            </Switch>
          </React.Suspense>
        </main>
      </section>
    </React.Fragment>
  )
};

export default AdminLayout;