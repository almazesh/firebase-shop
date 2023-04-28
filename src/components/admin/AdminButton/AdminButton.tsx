

import React from 'react';

interface IEditButton {
  title: string
}

const AdminButton: React.FunctionComponent<IEditButton> = ({title}) => {
  return (
    <React.Fragment>
      <button type='submit'>{title}</button>
    </React.Fragment>
  )
}

export default AdminButton;
