import {Route, Routes} from "react-router-dom"
import HomePage from "./components/Main/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.jsx"

function App() {
  return (
    <div>

        <NavBar/>
      <Routes>
        <Route path="/" element= {<HomePage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
