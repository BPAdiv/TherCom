import React, { useContext } from "react";
import UserRegisterForm from "./components/UserRegisterForm";
import UserAuthPage from "./UserAuthPage";
import { useAuth } from "@/hooks/useAuth";
import { UserContext } from "@/contexts/UserContextProvider";
import { Navigate } from "react-router-dom";

function RegisterPage() {
  const { user, setUser } = useContext(UserContext);
  useAuth();
  return (
    <>
      {user && <Navigate to="/" replace={true} />}

      <UserAuthPage formComponent={<UserRegisterForm />} />
    </>
  );
}

export default RegisterPage;
