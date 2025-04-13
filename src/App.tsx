import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <div>
      {/* Navigation Buttons */}
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/menu">
          <button>Menu</button>
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}
export default App;
