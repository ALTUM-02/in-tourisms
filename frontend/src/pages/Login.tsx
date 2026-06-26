import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
} from "lucide-react";

function Login() {
  const [showPassword,
    setShowPassword] =
    useState(false);

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");



const navigate = useNavigate();

const handleSubmit = async (
  e: React.FormEvent
) => {

  e.preventDefault();

  try {

    const response = await loginUser({

      username: username,
      password: password,

    });

    localStorage.setItem(
      "access",
      response.data.access
    );

    localStorage.setItem(
      "refresh",
      response.data.refresh
    );

    alert("Login Successful!");

    navigate("/dashboard");

  } catch (error: any) {

    console.error(error);

    if (error.response &&
      error.response.status === 401
    ) {
      alert(
        "Invalid username or password."
      );
    } else {
      alert(
        "An error occurred. Please try again."
      );
    }

  }



};

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-100
      p-6
      "
    >
      <div
        className="
        w-full
        max-w-6xl
        grid
        md:grid-cols-2
        rounded-2xl
        overflow-hidden
        shadow-2xl
        "
      >

        {/* LEFT */}

        <div
          className="
          bg-white
          p-10
          flex
          flex-col
          justify-center
          "
        >
          <h1
            className="
            text-3xl
            font-bold
            mb-8
            "
          >
            Welcome Back
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div className="relative">

              <Mail
                size={18}
                className="
                absolute
                left-3
                top-4
                text-gray-500
                "
              />

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>
                  setUsername(
                    e.target.value
                  )
                }
                className="
                w-full
                border
                rounded-lg
                pl-10
                py-3
                "
              />

            </div>

            <div className="relative">

              <Lock
                size={18}
                className="
                absolute
                left-3
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
                onChange={(e)=>
                  setPassword(
                    e.target.value
                  )
                }
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
                top-4
                "
              >
                {
                  showPassword
                  ? <EyeOff size={18}/>
                  : <Eye size={18}/>
                }
              </button>

            </div>

            <div
              className="
              flex
              justify-between
              text-sm
              "
            >
              <label>
                <input
                  type="checkbox"
                />
                <span className="ml-2">
                  Remember Me
                </span>
              </label>

              <Link
                to="#"
                className="
                text-emerald-600
                "
              >
                Forgot Password?
              </Link>
            </div>

            <button
              className="
              w-full
              bg-emerald-600
              hover:bg-emerald-700
              text-white
              py-3
              rounded-lg
              "
            >
              Login
            </button>

          </form>

          <p
            className="
            text-center
            mt-6
            "
          >
            Don't have an account?

            <Link
              to="/register"
              className="
              ml-2
              text-emerald-600
              "
            >
              Register
            </Link>
          </p>

        </div>

        {/* RIGHT */}

        <div
          className="
          relative
          bg-cover
          bg-center
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5')",
          }}
        >
          <div
            className="
            absolute
            inset-0
            bg-black/40
            "
          />

          <div
            className="
            relative
            z-10
            h-full
            flex
            flex-col
            justify-center
            px-12
            text-white
            "
          >

            <h1
              className="
              text-5xl
              font-bold
              mb-6
              "
            >
              DISCOVER
              TANZANIA
            </h1>

            <div
              className="
              space-y-3
              text-lg
              "
            >
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
                💬 Live Tourism Chat
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;