import "./App.css";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import Sendmail from "./components/Sendmail";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/shared/Navbar";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#f6f8fc] h-screen w-screen overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inbox />}></Route>
          <Route path="/mail/:id" element={<Mail />}></Route>
        </Route>
      </Routes>
      <div className="absolute w-[40%] bottom-0 right-20 z-10">
        <Sendmail/>
      </div>
      

    </div>
  );
}

export default App;
