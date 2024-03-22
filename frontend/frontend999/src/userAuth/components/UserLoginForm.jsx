import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function UserLoginForm({ className, ...props }) {
  const cookies = new Cookies();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  async function onSubmit(e) {
    console.log({ email, password });
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        { email, password }
      );
      console.log(data);
      cookies.set("token", data.token, { path: "/" });

      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  }
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to login
        </p>
      </div>
      {errorMessage ? (
        <div>
          <p className="text-red-500 text-sm">{errorMessage} </p>
        </div>
      ) : (
        ""
      )}

      <div className={cn("grid gap-6", className)} {...props}>
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="name@example.com"
                type="text"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
              <Label className="sr-only" htmlFor="password">
                Email
              </Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="******"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In with Email
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Dont have an account ? Signup below
            </span>
          </div>
        </div>
        <NavLink to={"/register"}>
          <Button type="button" disabled={isLoading} className="w-full">
            {/* {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "} */}
            Create an account
          </Button>
        </NavLink>
      </div>
    </>
  );
}

export default UserLoginForm;
