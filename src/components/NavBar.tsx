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
      <div>
        <img src="dots-menu.png" alt="dots menu" />
      </div>
      <LogInButton />
    </div>
  );
}

export default NavBar;
