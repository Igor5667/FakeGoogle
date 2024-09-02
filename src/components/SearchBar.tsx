import { useState } from "react";

function SearchBar() {
  const [phrase, setPhrase] = useState("");

  const handleSearch = (key: string) => {
    if (key === "Enter") {
      console.log(phrase);
      window.location.href = `https://www.google.com/search?q=${phrase.replace(
        " ",
        "+"
      )}`;
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="flex items-center gap-4 px-4 rounded-full border border-google-gray-100 hover:shadow-md p-2 w-[90%] md:w-[50%] lg:w-[30%]  h-12">
        <img src="search-icon.svg" alt="search icon" className="h-full" />
        <input
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          type="text"
          className="flex-1 min-w-0 focus:outline-none"
          onKeyUp={(e) => handleSearch(e.code)}
        />
        <img
          src="keyboard-icon.png"
          alt="keyboard"
          className="hidden lg:inline h-full cursor-pointer"
        />
        <img
          src="microphone-icon.svg"
          alt="microphone"
          className="h-full cursor-pointer"
        />
        <img
          src="camera-icon.svg"
          alt="camera"
          className="h-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default SearchBar;
