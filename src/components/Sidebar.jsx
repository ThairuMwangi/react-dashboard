import { Link } from "react-router-dom";

const Sidebar = ({ toggle }) => {
  return (
    <div
      className={`bg-blue-700 text-white p-4 min-h-screen w-64 ${
        toggle ? "block" : "hidden"
      } md:block`}
    >
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
      <ul>
        <li className="mb-4">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/analytics">Analytics</Link>
        </li>
        <li className="mb-4">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
