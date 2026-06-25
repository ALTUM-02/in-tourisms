import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-emerald-600">
          Tanzania Tourism
        </h1>

        <div className="space-x-6">

          <Link to="/">
            Home
          </Link>

          <Link to="/destinations">
            Destinations
          </Link>

          <Link to="/wildlife">
            Wildlife
          </Link>

          <Link to="/hotels">
            Hotels
          </Link>

          <Link to="/foods">
            Foods
          </Link>

        </div>

        <div className="space-x-3">

          <Link
            to="/login"
            className="px-4 py-2 border rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;