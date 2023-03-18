import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import WhydoExhibit from './pages/Exhibitor/WhydoExhibit';
import RegistrationForm from './pages/RegistrationForm';
import WhyVisit from './pages/Visitor/WhyVisit';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route exact path="/whytoExhibit" element={<WhydoExhibit />} />
        <Route exact path="/registrationfrom" element={<RegistrationForm />} />
        <Route exact path="/whyvisit" element={<WhyVisit />} />

      </Routes>
    </Router>
  );
}

export default App;
