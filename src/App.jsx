import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Navbar title="ReactFacts" />
      <Main />
      <Footer />
    </div>
  );
}