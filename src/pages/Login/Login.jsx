/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import style from "./login.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="mx-4 sm:mx-0 container-div max-w-md w-full space-y-8 rounded shadow-xl px-8 py-12 md:px-12 md:max-w-lg bg-white mt-8 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-center text-[#223645]">
            Sign in
          </h1>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address!",
                },
              })}
              className="rounded-md px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-[#e12454] block w-full bg-white"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="rounded-md px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-[#e12454] block w-full bg-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <a href="#" className="text-sm text-[#e12454] hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full items-center text-center px-4 py-2 rounded-md text-white font-bold shadow-sm bg-[#e12454] hover:bg-[#e12453d7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e12453d7]"
          >
            Sign in
          </button>
        </form>
        <div>{loginError && <p className="text-red-600">{loginError}</p>}</div>
        <div>
          <p className={style.title}>Or continue with</p>
        </div>
        <div className="flex justify-between gap-2">
          <Link className="flex items-center gap-4 py-2 px-6 sm:px-[52px] border border-[#e12454] rounded-md">
            <svg className="w-[20px]" aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                fill="#EA4335"
              ></path>
              <path
                d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                fill="#4285F4"
              ></path>
              <path
                d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                fill="#34A853"
              ></path>
            </svg>
            <span className="font-semibold">Google</span>
          </Link>
          <Link className="flex items-center gap-4 py-2 px-6 sm:px-[52px] border border-[#e12454] rounded-md">
            <svg
              className="w-[20px]"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-semibold">GitHub</span>
          </Link>
        </div>
        <div>
          <span>
            Don't have an account?{" "}
            <Link to={"/register"} className="text-[#e12454] hover:underline">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
