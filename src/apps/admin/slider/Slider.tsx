
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { setDoc } from 'firebase/firestore';

import { AdminComponents } from '../../../components/admin';
import { Components } from '../../../components/apps';
import { db, firestoreDoc } from '../../../firebase/firebase';
import { Providers } from '../../../providers';

import cls from "./index.module.scss";

const Slider: React.FunctionComponent<any> = () => {
  const { setRender } = Providers.useAuth();

  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onAdd = async (data: FieldValues) => {
    if(data.image !== "") {
      await setDoc(
        firestoreDoc(
          db, 
          "sliders", 
          String(Math.floor(Math.random() * 10000))
        ), 
        data
      );
      reset();
    }
    setRender("Added slider! " + data.image,);
  };

  return (
    <React.Fragment>
      <section className={cls.slider_page}>
        <h1>Edit Slider</h1>
        <hr />

        <form onSubmit={handleSubmit(onAdd)}>
          <Components.Divider>
            <Components.TextInput 
              type='text'
              placeholder='URL...'
              {...register("image")}
            />
          </Components.Divider>
          <Components.Divider>
            <AdminComponents.AdminButton title="Add slider" />
          </Components.Divider>
        </form>

        <section className={cls.slider_page_slide}>
          <Components.Slider isAdmin={true}/>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Slider;