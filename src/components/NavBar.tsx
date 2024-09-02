import { IoMenu } from "react-icons/io5";
import LogInButton from "./LogInButton";
import DottedMenu from "./DottedMenu";

function NavBar() {
  return (
    <div className="flex justify-center items-center gap-4 p-4 ">
      <a href="https://about.google/" className="hidden md:inline">
        O nas
      </a>
      <a href="https://store.google.com/" className="me-auto hidden md:inline">
        Google Store
      </a>

      <a href="https://mail.google.com/" className="hidden md:inline ms-auto">
        Gmail
      </a>
      <a href="https://www.google.com/imghp?hl" className="hidden md:inline">
        Grafika
      </a>

      {/* Menu on small devices */}
      <div className="inline md:hidden me-auto rounded-full p-2 transition hover:bg-google-gray-100">
        <IoMenu size={24} />
      </div>

      {/* Doted menu on medium devices and above */}
      <div className="rounded-full p-2 transition hover:bg-google-gray-100">
        <DottedMenu />
      </div>

      <LogInButton />
    </div>
  );
}

export default NavBar;
