import Form from "@/common/Form";
import { loginFormControls } from "@/helpers";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <Form
        formControls={loginFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Login"}
        onSubmit={onSubmit}
      />
      <p className="text-blue-950 font-medium ">
        Don't have an account? Please{" "}
        <Link className="hover:underline" to={"/auth/signup"}>
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
