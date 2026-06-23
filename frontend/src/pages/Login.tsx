import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // TODO:
    // Connect Django JWT Login API here
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
      px-4
      "
    >
      <div
        className="
        w-full
        max-w-md
        bg-white
        rounded-2xl
        shadow-xl
        p-8
        "
      >
        <div className="text-center mb-8">
          <h1
            className="
            text-3xl
            font-bold
            text-gray-800
            "
          >
            Welcome Back
          </h1>

          <p
            className="
            text-gray-500
            mt-2
            "
          >
            Login to your Tourism Account
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* EMAIL */}

          <div className="relative">
            <div
              className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-gray-500
              "
            >
              <FaEnvelope size={18} />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
              w-full
              border
              border-gray-300
              rounded-lg
              pl-10
              pr-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "
              required
            />
          </div>

          {/* PASSWORD */}

          <div className="relative">
            <div
              className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-gray-500
              "
            >
              <FaLock size={18} />
            </div>

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="
              w-full
              border
              border-gray-300
              rounded-lg
              pl-10
              pr-12
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-gray-500
              "
            >
              {showPassword ? (
                <FaEyeSlash size={18} />
              ) : (
                <FaEye size={18} />
              )}
            </button>
          </div>

          {/* REMEMBER ME */}

          <div
            className="
            flex
            justify-between
            items-center
            text-sm
            "
          >
            <label
              className="
              flex
              items-center
              gap-2
              "
            >
              <input
                type="checkbox"
              />

              Remember Me
            </label>

            <Link
              to="#"
              className="
              text-blue-600
              hover:underline
              "
            >
              Forgot Password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-semibold
            py-3
            rounded-lg
            transition
            "
          >
            Login
          </button>
        </form>

        {/* REGISTER LINK */}

        <div
          className="
          text-center
          mt-6
          "
        >
          <span
            className="
            text-gray-600
            "
          >
            Don't have an account?
          </span>

          <Link
            to="/register"
            className="
            ml-2
            text-blue-600
            font-semibold
            hover:underline
            "
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;