import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"



const FormEg = () => {



  const onSubmit = (data) => {
    console.log("Hello World!");
    console.log(data);
  };
 
const schema=yup.object().shape({
  fullName:yup.string().required("Full Name is required"),
  email:yup.string().email().required("Email is required"),
  age:yup.number("should be a number").positive("should be positive").integer("should be an integer").required("Age is required").min(18),
  password:yup.string().min(4).max(20).required("Password is required"),
  confirmPassword:yup.string().oneOf([yup.ref("password"),null]).required("Confirm Password is required")


})
  const { register, handleSubmit ,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name" {...register("fullName")} />
      <p style={{ color: "red" }}>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email" {...register("email")} />
      <p style={{ color: "red" }}>{errors.email?.message}</p>
      <input type="text" placeholder="Age" {...register("age")} />
      <p style={{ color: "red" }}>{errors.age?.message}</p>
      <input type="password" placeholder="Password" {...register("password")} />
      <p style={{ color: "red" }}>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <p style={{ color: "red" }}>{errors.fullName?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default FormEg;
