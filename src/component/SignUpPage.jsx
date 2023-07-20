import React from "react";
import "./SignUpPage.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Checkbox } from "antd";

const schema = yup.object({
  email: yup.string().email("email invaliud Format"),
  userName: yup.string().required("userName Name is required"),
  password: yup
    .string()
    .required("password is required")
    .min(5, "please enter 5 character length  must"),
  confirmPassword: yup
    .string()
    .required("confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },

    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("yiupp", data);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <div className="signup-container">
        <form onSubmit={handleSubmit(onSubmit)} style={{margin:"auto"}}>
          <div className="signUp-text">
            <h1>SIGNUP</h1>
          </div>
          <div className="welcomeBack-text">
            <h1>Welcome Back !</h1>
          </div>
          <div className="account-Layout">
            <div className="account-text">
              <input
                type="text"
                placeholder="EMAIL"
                name="email"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
          </div>
          <div className="passwrodLayout">
            <div className="password-text">
              <input
                type="text"
                placeholder="USER NAME"
                name="userName"
                {...register("userName")}
              />
              <p>{errors.userName?.message}</p>
            </div>
          </div>

          <div className="passwrodLayout">
            <div className="password-text">
              <input
                type="password"
                placeholder="PASSWORD"
                name="password"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>
          </div>

          <div className="passwrodLayout">
            <div className="password-text">
              <input
                type="password"
                placeholder="CONFIRM PASSWORD"
                name="confirmPassword"
                {...register("confirmPassword")}
              />
              <p>{errors.confirmPassword?.message}</p>
            </div>
          </div>
          {/* <div className="forgetPassword">
          <button className="btnFPass"> Forgot Password?</button>
        </div> */}
       
          <div className="terms-condition">
            <Checkbox onChange={onChange}>I Agree To the Terms & Conditions</Checkbox>
          </div>

          <button type="submit" className="login-Button">
          SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
}
