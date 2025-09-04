import Form from "@/common/Form";
import { loginFormControls } from "@/helpers";
import React, { useState } from "react";

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
    <div>
      <Form
        formControls={loginFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Login"}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Login;
