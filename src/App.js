import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./component/Nav";
import Home from "./component/Home";
import Public from "./component/Public";
import Private from "./component/Private"

import ProtectedRoute from "./component/ProtectedRoute";
import NotFound from "./component/NotFound";

export default function App() {
  return (
    <div className="App">
      <h1>Protected routes in react-router-dom v6.</h1>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/public" element={<Public />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/private"
            element={
              <ProtectedRoute>
                <Private />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}