import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Seamless from "./Components/Seamless/Seamless";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Seamless />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
