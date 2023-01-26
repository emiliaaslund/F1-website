import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./components/UI/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}
export default App;
