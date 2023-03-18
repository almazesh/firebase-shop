


import React from 'react';

interface ISubmit {
  location: string
}

export const AuthSubmit: React.FunctionComponent<ISubmit> = ({location}) => 
    <button type='submit'>{location}</button>
