// import logo from './logo.svg';
import "./App.css";
import ChatUI from "./router/chatbox/ChatAdmin";

import Dashboard from "./router/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/support" element={<ChatUI />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
