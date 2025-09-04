import { MyAppContext } from "@/context/CreateContext";
import React, { useContext } from "react";

const CallButton = () => {
  const { navigate } = useContext(MyAppContext);

  return (
    <button
      onClick={() => navigate("/auth")}
      className="bg-orange-600 px-3 rounded-full text-[16px] font-bold top-0 left-0"
    >
      Signup
    </button>
  );
};

export default CallButton;
