import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">

      <h1 className="text-5xl font-bold mb-6">
        Welcome to Tanzania Tourism
      </h1>

      <div className="flex gap-4">

        <Link
          to="/login"
          className="
          bg-emerald-600
          text-white
          px-6
          py-3
          rounded-lg
          "
        >
          Login
        </Link>

        <Link
          to="/register"
          className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          "
        >
          Register
        </Link>

      </div>

    </div>
  );
}

export default Home;