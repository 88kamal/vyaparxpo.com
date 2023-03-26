import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import WhydoExhibit from './pages/Exhibitor/WhydoExhibit';
import RegistrationForm from './pages/RegistrationForm';
import WhyVisit from './pages/Visitor/WhyVisit';
import ProfileExhibitor from './pages/Exhibitor/ProfileExhibitor';
import AboutOrganizer from './pages/About/AboutOrganizer';
import Stallinformation from './pages/Stallinformation';
import ProfileVisitor from './pages/Visitor/ProfileVisitor';
import ExhibitorRegistration from './pages/RegistrationForm/ExhibitorRegistration';
import VisitorRegistration from './pages/RegistrationForm/VisitorRegistration';
import BhuStudentRegistration from './pages/RegistrationForm/BhuStudentRegistration';
import Visitor from './pages/RegistrationForm/Visitor';
import Registrationforsponsorship from './pages/RegistrationForm/Registrationforsponsorship';
import FloorPlan from './pages/FloorPlan';
import AdminLogin from './pages/admin/AdminLogin';
import AdminPanel from './pages/admin/AdminPanel';
import Protected from './middleware/Protected';
import { useEffect, useState } from 'react';
import About from './components/About';

function App() {

  const [admin, setAdmin] = useState('');
  // const admin = localStorage.getItem('currentuser')
  // console.log(admin)

  useEffect(() => {
    const admin = localStorage.getItem('currentuser')
    setAdmin(admin)
  }, []);

  const logout = () => {
    localStorage.removeItem("currentuser");
    window.location.href='/adminlogin';
    // <About/>
  }


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
        <Route exact path="/exhibitorregistration" element={<ExhibitorRegistration />} />
        <Route exact path="/visitorregistration" element={<VisitorRegistration />} />
        <Route exact path="/bhustudentregistration" element={<BhuStudentRegistration />} />
        <Route exact path="/visitor" element={<Visitor />} />
        <Route exact path="/registrationforsponsorship" element={<Registrationforsponsorship />} />
        <Route exact path="/floorplan" element={<FloorPlan />} />
        <Route exact path="/adminlogin" element={<AdminLogin setAdmin={setAdmin} />} />
        <Route exact path="/adminpanel" element={
          admin ? <AdminPanel logout={logout} /> : <Home/>
        } />


      </Routes>
    </Router>
  );
}

export default App;
