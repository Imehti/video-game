function SearchBox() {
  return (
    <>
      <div className="relative">
        <input
          className="rounded-2xl bg-searchIcon w-64 pl-10 font-mono"
          type="text"
          placeholder="Discover New Games"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        </span>
      </div>
    </>
  );
}

export default SearchBox;
