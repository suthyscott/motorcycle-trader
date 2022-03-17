import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './reset.css'
import "./sass/App.scss";
import AllBikesDisplay from "./components/AllBikesDisplay";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<AllBikesDisplay />} />
          {/* <Route path='/auth' element={}/> */}
          {/* <Route path='/favorites' element={}/> */}
          {/* <Route path='/account' element={}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
