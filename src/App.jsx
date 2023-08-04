import "./App.css";
import NavbarComponent from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import TopBanner from "./components/topBanner/TopBanner";
function App() {
  return (
    <div>
      <NavbarComponent />
      <TopBanner />
      <Services />
    </div>
  );
}

export default App;
