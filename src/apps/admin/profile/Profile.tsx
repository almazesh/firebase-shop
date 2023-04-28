
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { AdminComponents } from '../../../components/admin';
import { Components } from '../../../components/apps';
import { auth } from '../../../firebase/firebase';
import { Providers } from '../../../providers';

import cls from "./index.module.scss";

const Profile: React.FunctionComponent<any> = () => {

  const { setRender, user } = Providers.useAuth();

  const {
    register,
    handleSubmit
  } = useForm({
    defaultValues: {
      photoURL: user?.avatar,
      displayName: user?.displayName,
      phoneNumber: "",
      country: ""
    }
  });

  const onEdit = async (data: FieldValues) => {
    const userCrentials: any = auth.currentUser;
    const { displayName, photoURL} = data;

    if(displayName !== "" && photoURL !== "" ) {
      await userCrentials.updateProfile({
        displayName: data.displayName,
        photoURL: data.photoURL,
      });
    }
    
    setRender("Update Credentials!");
  };

  return (
    <React.Fragment>
      <section className={cls.profile_page}>
        <h1>Edit Profile</h1>
        <hr />

        <form onSubmit={handleSubmit(onEdit)}>
          <Components.Divider>
            <Components.TextInput 
              type='text'
              placeholder='Avatar'
              {...register("photoURL")}
            />
          </Components.Divider>
          <Components.Divider>
            <Components.TextInput 
              type='text'
              placeholder='Display Name'
              {...register("displayName")}
            />
          </Components.Divider>

          <Components.Divider>
            <AdminComponents.AdminButton title="Edit profile"/>
          </Components.Divider>
        </form>
      </section>
    </React.Fragment>
  )
}

export default Profile;
