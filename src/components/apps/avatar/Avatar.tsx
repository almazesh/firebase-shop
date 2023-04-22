

import React from 'react';
import { Hooks } from '../../../hooks';

import cls from "./index.module.scss";

interface IAvatar {
  avatar: string
  w: string
  h: string
}

const Avatar: React.FunctionComponent<IAvatar> = ({avatar, w, h}) => {
  const [ava,setAvatar] = React.useState<string>("");
  const { actions } = Hooks.useRedirect();
 
  const NoneAvatar = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049__340.png";

  React.useEffect(() => {
    if(avatar) {
      setAvatar(avatar);
    } else {
      setAvatar(NoneAvatar);
    }
  }, [avatar]);

  return (
    <React.Fragment>
      <img 
        onClick={actions.goToProfile}
        className={cls.avatar} 
        src={ava} 
        alt=""
        width={w}
        height={h}
      />
    </React.Fragment>
  )
}

export default Avatar;
