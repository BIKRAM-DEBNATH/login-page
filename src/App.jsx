import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AccountSettings from "./pages/AccountSettings";
import MobileContainer from "./components/MobileContainer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <MobileContainer>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />

          {/* Protected Route */}
          <Route
            path="/account-settings"
            element={
              isAuthenticated ? <AccountSettings /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </MobileContainer>
    </Router>
  );
}

export default App;
