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
import AllStall from './pages/stall/AllStall';
import SixSq from './pages/stall/sixSq/SixSq';
import Invoice from './pages/stall/sixSq/Invoice';
import InvoiceNine from './pages/stall/nineSq/InvoiceNine';
import InvoiceTwelve from './pages/stall/TwelveSq/InvoiceTwelve';
import InvoiceFifteen from './pages/stall/FifteenSq/InvoiceFifteen';
import SixSqMeter from './pages/admin/adminStallDetail/SixSqMeter';
import {db} from './firebase/FireBaseConfig'
import { collection, query, limit, orderBy, onSnapshot } from "firebase/firestore";
import NineSqMeter from './pages/admin/adminStallDetail/NineSqMeter';
import TwelveSqMeter from './pages/admin/adminStallDetail/TwelveSqMeter';
import FifteenSqMeter from './pages/admin/adminStallDetail/FifteenSqMeter';
import Contact from './pages/Contact';
import AboutVyaparXpo from './pages/About/AboutVyaparXpo';
import HotelAccomodation from './pages/HotelAccomodation';
import Gallery from './pages/Gallery';

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
    window.location.href = '/adminlogin';
    // <About/>
  }

  // database get sixSquareMeterPayment
  const [sixSqMeter, setSixSquMeter] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "sixSquareMeterPayment"),
      orderBy("createdAt"),
      // limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let sixSqMeter = [];
      QuerySnapshot.forEach((doc) => {
        sixSqMeter.push({ ...doc.data(), id: doc.id });
      });
      setSixSquMeter(sixSqMeter)

    });

    return () => data;
  }, []);

   // database get nineSquareMeterPayment
   const [nineSqMeter, setNineSquMeter] = useState([]);
   useEffect(() => {
     const q = query(
       collection(db, "nineSquareMeterPayment"),
       orderBy("createdAt"),
       // limit(50)
     );
     const data = onSnapshot(q, (QuerySnapshot) => {
       let nineSqMeter = [];
       QuerySnapshot.forEach((doc) => {
        nineSqMeter.push({ ...doc.data(), id: doc.id });
       });
       setNineSquMeter(nineSqMeter)
     });
 
     return () => data;
   }, []);

   // database get twelveSquareMeterPayment
   const [twelveSqMeter, setTwelveSquMeter] = useState([]);
   useEffect(() => {
     const q = query(
       collection(db, "twelveSquareMeterPayment"),
       orderBy("createdAt"),
       // limit(50)
     );
     const data = onSnapshot(q, (QuerySnapshot) => {
       let twelveSqMeter = [];
       QuerySnapshot.forEach((doc) => {
        twelveSqMeter.push({ ...doc.data(), id: doc.id });
       });
       setTwelveSquMeter(twelveSqMeter)
     });
 
     return () => data;
   }, []);

    // database get fifteenSquareMeterPayment
    const [fifteenSqMeter, setFifteenSquMeter] = useState([]);
    useEffect(() => {
      const q = query(
        collection(db, "fifteenSquareMeterPayment"),
        orderBy("createdAt"),
        // limit(50)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let fifteenSqMeter = [];
        QuerySnapshot.forEach((doc) => {
          fifteenSqMeter.push({ ...doc.data(), id: doc.id });
        });
        setFifteenSquMeter(fifteenSqMeter)
      });
  
      return () => data;
    }, []);
  return (
    
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route exact path="/whytoExhibit" element={<WhydoExhibit />} />
        <Route exact path="/aboutvayparexpo" element={<AboutVyaparXpo />} />
        <Route exact path="/registrationfrom" element={<RegistrationForm />} />
        <Route exact path="/whyvisit" element={<WhyVisit />} />
        <Route exact path="/exhibitorprofile" element={<ProfileExhibitor />} />
        <Route exact path="/aboutorganizer" element={<AboutOrganizer />} />
        <Route exact path="/stallinformation" element={<Stallinformation />} />
        <Route exact path="/profilevisitor" element={<ProfileVisitor />} />
        <Route exact path="/exhibitorregistration" element={<ExhibitorRegistration />} />
        <Route exact path="/visitorregistration" element={<VisitorRegistration />} />
        <Route exact path="/studentregistration" element={<BhuStudentRegistration />} />
        <Route exact path="/visitor" element={<Visitor />} />
        <Route exact path="/registrationforsponsorship" element={<Registrationforsponsorship />} />
        <Route exact path="/floorplan" element={<FloorPlan />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/hotelaccomodation" element={<HotelAccomodation />} />
        <Route exact path="/adminlogin" element={<AdminLogin setAdmin={setAdmin} />} />
        <Route exact path="/adminpanel" element={
          admin ? <AdminPanel logout={logout} sixSqMeter={sixSqMeter} nineSqMeter={nineSqMeter} twelveSqMeter={twelveSqMeter} fifteenSqMeter={fifteenSqMeter} /> : <Home />
        } />



        {/* // stall  */}
        <Route exact path="/allstall" element={<AllStall />} />
        {/* <Route exact path="/sixsq" element={<SixSq />} /> */}
        <Route exact path="/invoice" element={<Invoice />} />
        <Route exact path="/invoicenine" element={<InvoiceNine />} />
        <Route exact path="/invoicetwelve" element={<InvoiceTwelve />} />
        <Route exact path="/invoicefifteen" element={<InvoiceFifteen />} />



      {/* admin stall detail route  */}
      <Route exact path="/admin/sixsqmeter" element={<SixSqMeter sixSqMeter={sixSqMeter} />} />
      <Route exact path="/admin/ninesqmeter" element={<NineSqMeter nineSqMeter={nineSqMeter} />} />
      <Route exact path="/admin/twelvesqmeter" element={<TwelveSqMeter twelveSqMeter={twelveSqMeter} />} />
      <Route exact path="/admin/fifteensqmeter" element={<FifteenSqMeter fifteenSqMeter={fifteenSqMeter} />} />

      </Routes>
    </Router>
  );
}

export default App;
