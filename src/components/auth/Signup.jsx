import Form from "@/common/Form";
import { registerFormControls } from "@/helpers";
import React, { useState } from "react";

const Signup = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Form
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Signup"}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Signup;
