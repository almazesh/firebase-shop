import React from 'react';
import 
  { 
    collection, 
    deleteDoc, 
    getDocs, 
    query 
  } from 'firebase/firestore';
  import { toast } from 'react-toastify';

import { SliderButton } from './sliderButton/SliderButton';
import { db, firestoreDoc } from '../../../firebase/firebase';
import { Providers } from '../../../providers';

import cls from "./index.module.scss";
import { Components } from '..';

interface ISlider {
  isAdmin: boolean
};

export const Slider: React.FunctionComponent<ISlider> = ({ isAdmin }) => {
  const [currentSlider, setCurrentSlider] = React.useState(0);
  const [slideData, setSlideData] = React.useState<any>([]);
  const { render, setRender } = Providers.useAuth();
  const notifyErrorSlide = () => 
    toast("Cannot delete the last slide!", { 
      className: "danger-toast",
      progressClassName: "progress"
    }
  );

  async function getCollections() {
    const sliders: any = query(collection(db, "sliders"));
    const queryDocs = await getDocs(sliders);
    
    setSlideData(queryDocs.docChanges());
  };

  React.useEffect(() => {
    getCollections();
  }, [render]);

  const deleteSlider = async () => {
    const foundedDoc = slideData?.find((el: any) => currentSlider === el.newIndex);

    const deletedDocId = foundedDoc.doc?.id;

    if(slideData?.length !== 1) {
      if(deletedDocId) {
        await deleteDoc(firestoreDoc(db, "sliders", deletedDocId));
        setRender(`Deleted ${deletedDocId}`);
        setCurrentSlider(0);
      };
    } else {
      notifyErrorSlide();
    }

  };

  const nextSlide = () => {
    if(slideData?.length !== 0) {
      if(currentSlider !== slideData?.length - 1) {
        setCurrentSlider(prev => prev + 1);
      } else {
        setCurrentSlider(0);
      }
    }
  };

  const prevSlide = () => {
    if(slideData?.length !== 0) {
      if(currentSlider > 0) {
        setCurrentSlider(prev => prev - 1);
      } else {
        setCurrentSlider(slideData?.length - 1);
      }
    }
  };

  return (
    <React.Fragment>
      <section className={cls.slider_wrapper}>
        {slideData?.length === 0 && <Components.Loader fullHeight='100%'/>}

        {slideData?.map((el: any, i: any) => {
          const data = el?.doc.data();

          return (
            <img 
              src={data.image} 
              alt="" 
              key={i}
              className={currentSlider === i ? cls.activeSlide : null}
            />
          )
        })}

        <SliderButton handleClick={prevSlide} direct='prev'/>
        <SliderButton handleClick={nextSlide} direct='next'/>

        {
          isAdmin && (
            <React.Fragment>
              {
                slideData?.length !== 0 && (
                  <div className={cls.delete_button}>
                    <button onClick={deleteSlider}>Delete slide</button>
                  </div>
                )
              }
            </React.Fragment>
          )
        }
      </section>
    </React.Fragment>
  )
};
