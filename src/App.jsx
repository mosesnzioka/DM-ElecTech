import {BrowserRouter, Routes, Route} from "react-router-dom"
import DashBord from "./components/dashbord/dashbord";
import Hero from "./components/hero/hero";
import Contracts from "./components/contracts/contracts";
import Engineers from "./components/engineers/engineers";
import Projects from "./components/projects/projects";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/DashBord" element={<DashBord/>}/>
      <Route path="/Contracts" element={<Contracts/> }/>
      <Route path="/Engineers" element={<Engineers/>}/>
      <Route path="/Projrcts" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
