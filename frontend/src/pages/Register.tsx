import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Globe,
  Lock,
  Upload,
} from "lucide-react";

function Register() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
    useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      full_name: "",
      username: "",
      email: "",
      phone: "",
      country: "",
      password: "",
      confirmPassword: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
  e: React.FormEvent
) => {

  e.preventDefault();

  if (
    formData.password !==
    formData.confirmPassword
  ) {

    alert("Passwords do not match");
    return;

  }

  try {

    const response =
      await registerUser({

        username: formData.username,

        email: formData.email,

        password: formData.password,

        phone: formData.phone,

        full_name: formData.full_name,

        country: formData.country,

        role: "tourist",

      });

    console.log(response.data);

    alert("Registration successful!");

    navigate("/login");

  } catch (error: any) {

    console.error(error);

    if (error.response) {

      alert(
        JSON.stringify(
          error.response.data
        )
      );

    } else {

      alert(
        "Unable to connect to server."
      );

    }

  }

};

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">

      <div
        className="
        w-full
        max-w-6xl
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-2xl
        grid
        md:grid-cols-2
        "
      >

        {/* LEFT SIDE */}

        <div
          className="
          relative
          bg-cover
          bg-center
          text-white
          p-10
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10">

            <h1
              className="
              text-4xl
              font-bold
              mb-6
              "
            >
              Discover Tanzania
            </h1>

            <p
              className="
              text-lg
              mb-8
              "
            >
              Join thousands of tourists
              exploring wildlife,
              hotels, local foods,
              and unforgettable
              adventures.
            </p>

            <div className="space-y-4">

              <p>
                🦁 Wildlife Safari
              </p>

              <p>
                🏨 Hotels & Lodges
              </p>

              <p>
                🍽 Foods & Drinks
              </p>

              <p>
                🤖 AI Travel Assistant
              </p>

              <p>
                💬 Tourism Officer Chat
              </p>

              <p>
                🌍 Explore Tanzania
              </p>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="p-10">

          <div className="mb-8">

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              Register
            </h2>

            <p className="text-gray-500">
              Create your tourism account
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* Full Name */}

            <div className="relative">

              <User
                size={18}
                className="
                absolute
                left-3
                top-3.5
                text-gray-400
                "
              />

              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                onChange={handleChange}
                className="
                w-full
                border
                rounded-lg
                pl-10
                py-3
                "
              />

            </div>

            {/* Username */}

            <div className="relative">

              <User
                size={18}
                className="
                absolute
                left-3
                top-3.5
                text-gray-400
                "
              />

              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className="
                w-full
                border
                rounded-lg
                pl-10
                py-3
                "
              />

            </div>

            {/* Email */}

            <div className="relative">

              <Mail
                size={18}
                className="
                absolute
                left-3
                top-3.5
                text-gray-400
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="
                w-full
                border
                rounded-lg
                pl-10
                py-3
                "
              />

            </div>

            {/* Phone */}

            <div className="relative">

              <Phone
                size={18}
                className="
                absolute
                left-3
                top-3.5
                text-gray-400
                "
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="
                w-full
                border
                rounded-lg
                pl-10
                py-3
                "
              />

            </div>

            {/* Country */}

            <div className="relative">

              <Globe
                size={18}
                className="
                absolute
                left-3
                top-3.5
                text-gray-400
                "
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                className="
                w-full
                border
                rounded-lg
                pl-10
                py-3
                "
              />

            </div>

            {/* Password */}

            <div className="relative">

              <Lock
                size={18}
                className="
                absolute
                left-3
                top-3.5
                text-gray-400
                "
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="
                w-full
                border
                rounded-lg
                pl-10
                pr-10
                py-3
                "
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
                top-3
                "
              >
                {showPassword
                  ? <EyeOff size={18}/>
                  : <Eye size={18}/>}
              </button>

            </div>

            {/* Confirm Password */}

            <div className="relative">

              <Lock
                size={18}
                className="
                absolute
                left-3
                top-3.5
                text-gray-400
                "
              />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                className="
                w-full
                border
                rounded-lg
                pl-10
                pr-10
                py-3
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="
                absolute
                right-3
                top-3
                "
              >
                {showConfirmPassword
                  ? <EyeOff size={18}/>
                  : <Eye size={18}/>}
              </button>

            </div>

            {/* Photo Upload */}

            <div>

              <label
                className="
                flex
                items-center
                gap-2
                text-gray-600
                mb-2
                "
              >
                <Upload size={18}/>
                Profile Photo
              </label>

              <input
                type="file"
                className="
                w-full
                border
                rounded-lg
                p-2
                "
              />

            </div>

            <button
              type="submit"
              className="
              w-full
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              py-3
              rounded-lg
              font-semibold
              "
            >
              Create Account
            </button>

          </form>

          <div
            className="
            text-center
            mt-6
            "
          >
            Already have an account?

            <Link
              to="/login"
              className="
              ml-2
              text-emerald-600
              font-semibold
              "
            >
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;