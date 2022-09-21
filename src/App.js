import Fototer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Details from "./components/details/Details";
import {BrowserRouter , Routes, Route} from "react-router-dom"

 
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/details" element={<Details />}/>
        </Routes>
      </BrowserRouter>
      <Fototer />
    </>
  );
}

export default App;
