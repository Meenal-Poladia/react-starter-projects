import './App.css';
import "./components/ContactUs";
import "./components/AboutUs";
import "./components/Nav";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from"./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  return (
      <Router>
          <div className="App">
              <Nav/>
              <Routes>
                  <Route path="/" element={<Home/>} exact/>
                  <Route path="/about" element={<AboutUs/>}/>
                  <Route path="/contact" element={<ContactUs/>}/>
              </Routes>
          </div>
      </Router>

  );
}

export default App;
