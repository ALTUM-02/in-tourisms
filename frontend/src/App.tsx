import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Destinations from "./pages/Destination";
import Wildlife from "./pages/wildlife";
import Hotels from "./pages/Hotels";
import Foods from "./pages/Foods";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/wildlife"
          element={<Wildlife />}
        />

        <Route
          path="/hotels"
          element={<Hotels />}
        />

        <Route
          path="/foods"
          element={<Foods />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;