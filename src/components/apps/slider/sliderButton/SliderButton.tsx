import React from 'react';
import classNames from 'classnames';
import { ICONS } from '../../../../icons/Icons';

import cls from "./index.module.scss";

interface ISliderBtn {
  direct: string
  handleClick: React.MouseEventHandler<HTMLButtonElement>
};

export const SliderButton: React.FunctionComponent<ISliderBtn> = ({direct, handleClick}) => {
  return (
    <React.Fragment>
      <button 
        onClick={handleClick} 
        className={
          direct === "prev"
            ? classNames(cls.slider_button, cls.prev_button)
            : classNames(cls.slider_button, cls.next_button)
        }
      >
        {
          direct === "prev"
            ? <ICONS.BiArrowToLeft />
            : <ICONS.BiArrowToRight />
        }
      </button>
    </React.Fragment>
  )
};
