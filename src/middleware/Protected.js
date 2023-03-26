import AdminLogin from "../pages/admin/AdminLogin";
import AdminPanel from "../pages/admin/AdminPanel";

const Protected = () =>{
  const admin = localStorage.getItem('currentuser');
  if(admin){
    <AdminPanel/>
  }else{
    <AdminLogin/>
  }
}

export default Protected;