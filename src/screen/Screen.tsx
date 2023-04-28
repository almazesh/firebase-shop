import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Providers } from '../providers';
import Admin from '../routes/Admin';
import { Routes } from '../routes/Routes';

import cls from "./index.module.scss";

const Screen: React.FunctionComponent<any> = () => {
  const { state, changeState } = Providers.useAuth();

  return (
    <React.Fragment>
      {
        state === "screen" && (
          <aside className={cls.screen_container}>
            <section className={cls.screen_container_card}>
              <h1>How do you want to assign?</h1>

              <div className={cls.screen_container_card_btns}>
                <button onClick={() => changeState("web")}>
                  Website
                </button>
                <button onClick={() => changeState("admin")}>
                  Admin
                </button>
              </div>
            </section>
          </aside>
        )
      }

      {state === "web" && <Routes />}

      {state === "admin" && <Admin />}

      <ToastContainer />
    </React.Fragment>
  )
};

export default Screen;