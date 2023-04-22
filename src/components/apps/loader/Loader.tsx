


import React from 'react';

interface ILoader {
  fullHeight: string
}

export const Loader: React.FunctionComponent<ILoader> = ({fullHeight}) => 
  <div className='loader_container' style={{height: fullHeight}}>
    <div className="lds-dual-ring"></div>
  </div>
