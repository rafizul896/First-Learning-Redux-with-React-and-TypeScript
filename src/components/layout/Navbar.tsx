import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/modeToggle";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto h-16 flex justify-between items-center px-5">
      <div className="flex items-center">
        <span className="font-bold">Task</span>Master
      </div>

      <div className="flex items-center gap-5">
        <Link to="/">Tasks</Link>
        <Link to="/users">Users</Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
