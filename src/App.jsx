import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex">
      <Sidebar toggle={toggle} />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar setToggle={setToggle} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
