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
import FAQ from "./components/FAQ.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TestimonialSlider from "./components/TestimonialSlider.jsx";
import GetStartedSection from "./components/GetStartedSection.jsx";
import DriverWaitlist from "./pages/DriverWaitlist.jsx";
import UnionWaitlist from "./pages/UnionWaitlist.jsx";
import GovernmentWaitlist from "./pages/GovernmentWaitlist.jsx";

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
              <Coverage />
              <HowItWorks />
              <HelpCenter />
              <TestimonialSlider />
              <FAQ />
              <GetStartedSection />
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
        <Route
          path="/contact"
          element={
            <Home>
              <ContactPage />
            </Home>
          }
        />
        <Route
          path="/driver"
          element={
            <Home>
              <DriverWaitlist />
            </Home>
          }
        />
        <Route
          path="/union"
          element={
            <Home>
              <UnionWaitlist />
            </Home>
          }
        />
        <Route
          path="/government"
          element={
            <Home>
              <GovernmentWaitlist />
            </Home>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
