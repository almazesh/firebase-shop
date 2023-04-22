
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Providers } from '../../../providers';
import { LIST } from '../../../utils/List';

import cls from "./index.module.scss";

const Sidebar: React.FunctionComponent<any> = () => {
  const { changeState } = Providers.useAuth();

  const adminSidebarLeftList = [
    {
      id:1,
      title: "web",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Emblem-web.svg/1200px-Emblem-web.svg.png",
      event: () => {
        changeState("web")
      }
    },
  ]

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