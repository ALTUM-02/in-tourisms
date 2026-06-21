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

    // Connect JWT Login API here
  };

  return (

    <div
      className="
      min-h-screen
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      px-4
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
      }}
    >t

      <div
        className="
        w-full
        max-w-md
        backdrop-blur-md
        bg-white/20
        border
        border-white/30
        rounded-3xl
        shadow-2xl
        p-8
        "
      >

        <div className="text-center mb-8">

          <h1
            className="
            text-4xl
            font-bold
            text-white
            "
          >
            Welcome Back
          </h1>

          <p
            className="
            text-gray-200
            mt-2
            "
          >
            Login to explore Tanzania Tourism
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Email */}

          <div className="relative">

            <FaEnvelope
              className="
              absolute
              left-4
              top-4
              text-gray-500
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
              w-full
              pl-12
              pr-4
              py-3
              rounded-xl
              outline-none
              bg-white
              "
              required
            />

          </div>

          {/* Password */}

          <div className="relative">

            <FaLock
              className="
              absolute
              left-4
              top-4
              text-gray-500
              "
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
              w-full
              pl-12
              pr-12
              py-3
              rounded-xl
              outline-none
              bg-white
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
              right-4
              top-4
              text-gray-500
              "
            >

              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}

            </button>

          </div>

          {/* Remember Me */}

          <div
            className="
            flex
            justify-between
            items-center
            text-white
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
              to="/forgot-password"
              className="
              hover:text-yellow-300
              "
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="
            w-full
            bg-yellow-500
            hover:bg-yellow-600
            text-black
            font-bold
            py-3
            rounded-xl
            transition
            "
          >
            Login
          </button>

        </form>

        {/* Register */}

        <div
          className="
          text-center
          mt-6
          text-white
          "
        >

          Don't have an account?

          <Link
            to="/register"
            className="
            ml-2
            text-yellow-300
            font-semibold
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