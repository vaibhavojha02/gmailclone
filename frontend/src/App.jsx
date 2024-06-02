import "./App.css";
import Inbox from "./components/Inbox";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/shared/Navbar";
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="bg-[#f6f8fc] h-screen w-screen overflow-hidden">
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path="/inbox" element =  {<Inbox/>} />
      </Routes>
      
    </div>
  );
}

export default App;
