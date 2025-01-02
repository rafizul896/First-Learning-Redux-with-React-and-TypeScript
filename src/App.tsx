import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-5">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
