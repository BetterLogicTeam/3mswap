import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Front from './Components/Front/Front'
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Index_main from "./Components/Index_main";
import Work_main from "./Components/Work_main";
import About_main from "./Components/About_main";
import Faq_main from "./Components/Faq_main";
import Overview_main from "./Components/Overview_main";
import Pool_main from "./Components/Pool_main";
import Token_main from "./Components/Token_main";
import Liquidity_main from "./Components/Liquidity_main";
import Crypto_main from "./Components/Crypto_main";



function App() {
  return (
    <div className="">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Index_main />} />
          <Route path="/Work_main" element={<Work_main />} />
          <Route path="/About_main" element={<About_main />} />
          <Route path="/Faq_main" element={<Faq_main />} />
          <Route path="/Overview_main" element={<Overview_main />} />
          <Route path="/Pool_main" element={<Pool_main />} />
          <Route path="/Token_main" element={<Token_main />} />
          <Route path="/Liquidity_main" element={<Liquidity_main />} />
          <Route path="/Crypto_main" element={<Crypto_main />} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
