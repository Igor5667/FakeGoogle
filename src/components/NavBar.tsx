import LogInButton from "./LogInButton";

function NavBar() {
  return (
    <div className="flex justify-center items-center gap-4 p-4 ">
      <a href="#">O nas</a>
      <a href="#" className="me-auto">
        Google Store
      </a>
      <a href="#">Gmail</a>
      <a href="#">Grafika</a>
      <div className="rounded-full p-2 transition hover:bg-google-gray-100">
        <img src="dots-menu.png" alt="dots menu" />
      </div>
      <LogInButton />
    </div>
  );
}

export default NavBar;
