import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Component2 from './components/Component2.jsx';
import Component3 from './components/Component3.jsx';
import Component4 from './components/Component4.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="nav-bar">
          <Component2 />
        </div>
        <div className="main-content">
          <Routes>
            {/* <Route path="/" element={<Component2 />} /> */}
            <Route path="/component3" element={<Component3 />} />
            <Route path="/component4" element={<Component4 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
