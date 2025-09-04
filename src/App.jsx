import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
