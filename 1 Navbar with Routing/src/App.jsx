import Navbar from "./Navbar";
import Home from './componenets/Home'
import Pricing from './componenets/Pricing'
import About from './componenets/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  // console.log(window.location);
  // let Component;
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = <Home />;
  //     break;
  //   case "/pricing":
  //     Component = <Pricing />;
  //     break;
  //   case "/about":
  //     Component = <About />;
  //     break;

  //   default:
  //     break;
  // }


  return (
    <>
      <Navbar />
      <div className="container">
        {/* {Component} */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </>
  );


}

export default App;
