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
import ProfileExhibitor from './pages/Exhibitor/ProfileExhibitor';
import AboutOrganizer from './pages/About/AboutOrganizer';
import Stallinformation from './pages/Stallinformation';
import ProfileVisitor from './pages/Visitor/ProfileVisitor';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route exact path="/whytoExhibit" element={<WhydoExhibit />} />
        <Route exact path="/registrationfrom" element={<RegistrationForm />} />
        <Route exact path="/whyvisit" element={<WhyVisit />} />
        <Route exact path="/exhibitorprofile" element={<ProfileExhibitor />} />
        <Route exact path="/aboutorganizer" element={<AboutOrganizer />} />
        <Route exact path="/stallinformation" element={<Stallinformation />} />
        <Route exact path="/profilevisitor" element={<ProfileVisitor />} />

      </Routes>
    </Router>
  );
}

export default App;
