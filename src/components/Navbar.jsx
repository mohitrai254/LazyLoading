import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-7 p-4 text-xl font-bold text-blue-500 bg-green-300 justify-center">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
