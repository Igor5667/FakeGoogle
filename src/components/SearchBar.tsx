function SearchBar() {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex items-center gap-4 px-4 rounded-full border border-google-gray-100 hover:shadow-md p-2 w-1/2">
        <img
          src="search-icon.svg"
          alt="search icon"
          className="h-5 text-google-gray-200"
        />
        <input type="text" className="flex-1 focus:outline-none" />
        <img
          src="keyboard-icon.png"
          alt="keyboard"
          className="h-5 cursor-pointer"
        />
        <img
          src="microphone-icon.svg"
          alt="microphone"
          className="h-5 cursor-pointer"
        />
        <img src="camera-icon.svg" alt="camer" className="h-5 cursor-pointer" />
      </div>
    </div>
  );
}

export default SearchBar;
