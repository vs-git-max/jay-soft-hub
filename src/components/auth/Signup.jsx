import Form from "@/common/Form";
import { registerFormControls } from "@/helpers";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="grid place-items-center gap-2">
      <Form
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Signup"}
        onSubmit={onSubmit}
      />
      <p className="text-blue-950 font-medium ">
        Already have an account? Please{" "}
        <Link className="hover:underline" to={"/auth/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
