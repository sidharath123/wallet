import React from "react";
import "./ReactForm.css";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = yup.object({

  account: yup.string().required('account Name is required'),
  
  password: yup.string().required('password is required').min(5,'please enter 5 character length  must')
});

export default function ReactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
    
      account: "",
      password: ""
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('yiupp', data);
  };

  return (
    <div className="login-container">
      <form onClick={handleSubmit(onSubmit)}  style={{margin:"auto"}}>
        <div className="login-text">
          <h1>LOGIN</h1>
        </div>
        <div className="welcomeBack-text">
          <h1>Welcome Back !</h1>
        </div>
        <div className="account-Layout">
          <div className="account-text">
            <input type="text" placeholder="ACCOUNT" name="account" {...register('account')} />
            <p>{errors.account?.message}</p>
          </div>

         
        </div>
        <div className="passwrodLayout">
          <div className="password-text">
            <input type="password" placeholder="PASSWORD" name="password" {...register('password')} />
            <p>{errors.password?.message}</p>
          </div>
        </div>
        <div className="forgetPassword">
          <button className="btnFPass"> Forgot Password?</button>
        </div>
        <button className="login-Button">
          <h3>LOGIN</h3>
        </button>
      </form>
    </div>
  );
}


