import { IoMenu } from "react-icons/io5";
import LogInButton from "./LogInButton";

function NavBar() {
  return (
    <div className="flex justify-center items-center gap-4 p-4 ">
      <a href="#" className="hidden md:inline">
        O nas
      </a>
      <a href="#" className="me-auto hidden md:inline">
        Google Store
      </a>
      <a href="#" className="hidden md:inline">
        Gmail
      </a>
      <a href="#" className="hidden md:inline">
        Grafika
      </a>
      <div className="inline md:hidden">
        <IoMenu size={24} />
      </div>
      <div className="rounded-full p-2 transition hover:bg-google-gray-100 ms-auto">
        <img src="dots-menu.png" alt="dots menu" />
      </div>
      <LogInButton />
    </div>
  );
}

export default NavBar;
