import GlobalStyle from "./GlobalStyles.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import HeroImage from "./components/HeroImage";
import Home from "./components/Home"; // layout wrapper

// Example page imports
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HelpCenter from "./pages/HelpCenter.jsx";
import Resources from "./pages/Resources.jsx";
import Coverage from "./pages/Coverage.jsx";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <Home>
              <Hero />
              <HeroImage />
            </Home>
          }
        />

        {/* Other pages using same layout */}
        <Route
          path="/how-it-works"
          element={
            <Home>
              <HowItWorks />
            </Home>
          }
        />
        <Route
          path="/login"
          element={
            <Home>
              <Login />
            </Home>
          }
        />
        <Route
          path="/signup"
          element={
            <Home>
              <Signup />
            </Home>
          }
        />
        <Route
          path="/coverage"
          element={
            <Home>
              <Coverage />
            </Home>
          }
        />
        <Route
          path="/resources"
          element={
            <Home>
              <Resources />
            </Home>
          }
        />
        <Route
          path="/help-center"
          element={
            <Home>
              <HelpCenter />
            </Home>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
