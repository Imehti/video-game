import SearchBox from "./SearchBox";

function Navbar() {
  return (
    <>
      {/* logo */}
      <div className="flex items-center">
        <img className="m-3 p-1 mr-1" src="src\assets\logo.png" alt="" />
        <h1 className="text-blue m-6 ml-1 font-mono text-2xl">Game</h1>
        <span className="border-r border-white h-8 -ml-2"></span>
        <h1 className="text-white ml-4">Explore</h1>
        <h1 className="text-white ml-4">Blog</h1>
        <div className="ml-8">
        <SearchBox />
        </div>
      </div>
      {/* end logo */}
    </>
  );
}

export default Navbar;
