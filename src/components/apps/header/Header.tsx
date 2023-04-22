
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Components } from '..';
import { Providers } from '../../../providers';
import { LIST } from '../../../utils/List';

import cls from "./index.module.scss";

const Header: React.FunctionComponent = () => {
  const { user, token } = Providers.useAuth();

  const handleSearch = (e: any) => {
    if(e.key === "Enter") {

    }
  }

  return (
    <React.Fragment>
      <Components.Container>
        <header>
          <section className={cls.header_top}>
            <Components.Logo />
            
            <div>
              <ul>
                {LIST.HeaderTopIcons.filter((item, i) => (user && token) ? i < 2 : i < 5)
                  .map((item) => (
                    <React.Fragment key={item.id}>
                      {
                        !user 
                          ? null
                          : (
                            <li key={item.id} className={item.id === 3 ? cls.stick : ""}>
                              <NavLink 
                                className={({isActive}) => isActive ? cls.activeLink : ""} 
                                to={item.route || ""} 
                              >
                                {item.icon && <item.icon />}
                                {item.caption}
                              </NavLink>
                            </li>
                          )
                      }
                    </React.Fragment>
                ))}
              </ul>
              {
                (user && token) 
                  ? <Components.Avatar 
                      avatar={user?.avatar}
                      w={"35px"}
                      h={"35px"}
                    /> 
                  : null
              }
            </div>
          </section>
          <section className={cls.header_bottom}>
            <ul>
              {LIST.HeaderBottomElements.map(item => (
                <li key={item.id}>
                  <Link to={item.route || ""}>
                    {item.caption}
                  </Link>
                </li>
              ))}
            </ul>

            <form onKeyDown={handleSearch}>
              <input 
                type={"search"}
                placeholder="Search..."
              />
            </form>
          </section>
        </header>
      </Components.Container>
    </React.Fragment>
  )
};

export default Header;
