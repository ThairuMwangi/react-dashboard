const Navbar = ({ setToggle }) => {
    return (
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <button onClick={() => setToggle(t => !t)} className="md:hidden">
          ☰
        </button>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
    );
  };
  
  export default Navbar;
  