import React from 'react';
import { SliderButton } from './sliderButton/SliderButton';
import { LIST } from '../../../utils/List';

import cls from "./index.module.scss";
import { Components } from '..';

export const Slider: React.FunctionComponent<any> = () => {
  const [currentSlider, setCurrentSlider] = React.useState(0);

  const nextSlide = () => {
    if(currentSlider !== LIST.SliderList.length - 1) {
      setCurrentSlider(prev => prev + 1);
    } else {
      setCurrentSlider(0);
    }
  };

  const prevSlide = () => {
    if(currentSlider > 0) {
      setCurrentSlider(prev => prev - 1);
    } else {
      setCurrentSlider(LIST.SliderList.length - 1);
    }
  };

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.slider_wrapper}>
          {LIST.SliderList.map((el, i) => 
            <img 
              src={el.img} 
              alt="" 
              key={el.id}
              className={currentSlider === i ? cls.activeSlide : null}
            />
          )}

          <SliderButton handleClick={prevSlide} direct='prev'/>
          <SliderButton handleClick={nextSlide} direct='next'/>
        </section>
      </Components.Container>
    </React.Fragment>
  )
};
