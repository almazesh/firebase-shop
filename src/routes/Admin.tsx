import React from 'react';
import { AdminComponents } from '../components/admin';
 
const Admin: React.FunctionComponent<any> = () => {
  const auth = true;

  return (
    <React.Fragment>
      {
        auth 
          ? <AdminComponents.AdminLayout /> 
          : <AdminComponents.AdminAccess />
      }
    </React.Fragment>
  )
}


export default Admin;