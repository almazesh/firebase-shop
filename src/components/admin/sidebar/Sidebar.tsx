
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Providers } from '../../../providers';
import { LIST } from '../../../utils/List';

import cls from "./index.module.scss";

interface IAdminLeftList {
  id: number
  title: string | null
  img: string
  event: () => void | undefined
}

const Sidebar: React.FunctionComponent<any> = () => {
  const [ava,setAvatar] = React.useState<string>("");
  const NoneAvatar = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049__340.png";

  const { changeState, user } = Providers.useAuth();

  React.useEffect(() => {
    if(user?.avatar) {
      setAvatar(user?.avatar);
    } else {
      setAvatar(NoneAvatar);
    }
  }, [user]);

  const adminSidebarLeftList: IAdminLeftList[] = [
    {
      id:1,
      title: "web",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Emblem-web.svg/1200px-Emblem-web.svg.png",
      event: () => {
        changeState("web")
      }
    },

    {
      id:2,
      title: null,
      img: ava,
      event: () => {

      }
    },
  ];

  return (
    <React.Fragment>
      <section className={cls.sidebar}>
        <section className={cls.sidebar_left}>
          {
            adminSidebarLeftList.map(i => (
              <div 
                className={cls.sidebar_left_list} 
                key={i.id}
                onClick={() => i.event()}
              >
                <img 
                  src={i.img}
                  alt=""
                />
                <p>{i.title}</p>
              </div>
            ))
          }
        </section>
        <section className={cls.sidebar_right_list}>
          <h1>Administration</h1>

          <ul>
            {
              LIST.adminList.map(i => (
                <li key={i.id}>
                  <NavLink className={({isActive}) => isActive ? cls.active : null} to={i.route}>
                    <i.icons />
                    {i.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </section>
      </section>
    </React.Fragment>
  )
};


export default Sidebar;