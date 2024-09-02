function LogInButton() {
  const handleLogin = () => {
    window.location.href = "https://accounts.google.com/";
  };

  return (
    <button
      className="bg-[#0b57d0] text-white  py-2 px-4 rounded-full"
      onClick={handleLogin}
    >
      Zaloguj się
    </button>
  );
}

export default LogInButton;
