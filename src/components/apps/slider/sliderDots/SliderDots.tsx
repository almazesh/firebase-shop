
import React from 'react';
import classNames from 'classnames';

import { ISliderDots } from '../../../../types/types';

const SliderDots: React.FunctionComponent<ISliderDots> = 
  (
    { 
      cls, 
      i, 
      currentSlider, 
      setCurrentSlider 
    }
  ) => {

  return (
    <React.Fragment>
      <div 
        className={currentSlider === i ? classNames(cls.dots, cls.activeDots) : cls.dots} 
        onClick={() => setCurrentSlider(i)}
      />
    </React.Fragment>
  )
}


export default SliderDots;