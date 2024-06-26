import SearchBox from "./SearchBox";

function Navbar() {
  return (
    <>
      {/* logo */}
      <div className="flex items-center">
        <img className="m-3 p-1 mr-1" src="src\assets\logo.png" alt="" />
        <h1 className="text-blue m-6 ml-1 font-mono text-2xl">Game</h1>
        <span className="border-r border-white h-8 sm:-ml-2 -ml-4"></span>
        <h1 className="text-white sm:ml-4 ml-1">Explore</h1>
        <h1 className="text-white sm:ml-4 ml-2">Blog</h1>
        <div className="sm:ml-8 ml-2">
        <SearchBox />
        </div>
      </div>
      {/* end logo */}
    </>
  );
}

export default Navbar;
