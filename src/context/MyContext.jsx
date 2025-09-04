import { useNavigate } from "react-router-dom";
import { MyAppContext } from "./CreateContext";

const MyProvider = ({ children }) => {
  const navigate = useNavigate();

  return (
    <MyAppContext.Provider value={{ navigate }}>
      {children}
    </MyAppContext.Provider>
  );
};

export default MyProvider;
