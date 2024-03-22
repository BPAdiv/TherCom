import React, { useContext } from "react";
import UserAuthPage from "./UserAuthPage";
// import UserRegisterForm from "./components/UserRegisterForm";
import UserLoginForm from "./components/UserLoginForm";
import { UserContext } from "@/contexts/UserContextProvider";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  useAuth();

  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <UserAuthPage formComponent={<UserLoginForm />} />;
    </>
  );
}

export default LoginPage;
