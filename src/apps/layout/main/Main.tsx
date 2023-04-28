import React from 'react';

import { Components } from '../../../components/apps';


const Main: React.FunctionComponent<any> = () => {

  return (
    <React.Fragment>
      <Components.Container>
        <Components.Slider isAdmin={false}/>
      </Components.Container>
    </React.Fragment>
  )
};

export default Main;

