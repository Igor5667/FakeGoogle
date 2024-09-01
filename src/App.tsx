import Footer from "./components/Footer";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import UnderButtons from "./components/UnderButtons";

function App() {
  return (
    <div className="h-[100svh] md:h-screen flex flex-col">
      <NavBar />
      <Logo />
      <SearchBar />
      <UnderButtons />
      <Footer className={"mt-auto"} />
    </div>
  );
}

export default App;
