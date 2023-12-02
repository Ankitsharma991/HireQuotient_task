import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Seamless from "./Components/Seamless/Seamless";
import SmartPage from "./Components/Smartpage/SmartPage";
import Seamless2 from "./Components/Seamless2/Seamless2";
import SmartPage2 from "./Components/Smart2/SmartPage2";
import Features from "./Components/Features/Features";
import ProductsPage from "./Components/Products/ProductsPage";
import PricePlan from "./Components/PricePlan/PricePlan";
import Faqs from "./Components/FAQs/Faqs";
import LastCall from "./Components/LastCall/LastCall";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Seamless />
      <SmartPage />
      <Seamless2 />
      <SmartPage2 />
      <Features />
      <ProductsPage />
      <PricePlan />
      <Faqs />
      <LastCall />
      <Footer />
    </div>
  );
}

export default App;
