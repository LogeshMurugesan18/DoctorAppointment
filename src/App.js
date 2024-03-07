import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Appointment1 from './Appointment1';
import Feedback1 from  './Feedback1';
import About1 from  './About1'
import Help1 from './Help1';
import LoginComponent from './LoginSignuo/loginoption';
import Page1 from './Page1';
import Apps from './apps.js';
import Login1 from './Login1.js';
import Profile1 from './profile1.js';
import DoctAppo1 from './DoctAppo1';
import Dprofile1 from './Dprofile1.js';
import DocLogin from './Doctor/doclogin.js';
import AdminLogin from './Admin/adminlogin.js';
import LoginComponentWithCarousel from './LoginSignuo/loginoption';
import SignupDoctor from './Doctor/docsignup.js';
import Paitedit from './ProfileEdit/editpait.js';
import Docedit from './ProfileEdit/editdoc.js';
import AdminHome1 from './AdminHome1.js';
import AdminDoc1 from './AdminDoc1.js';
import AdminPatient1 from './AdminPatient1.js';


function App() {
  return (
   <>

   <div className='hh'>
  
   <Routes path='/' element={<Page1/>}>
   <Route index path='/' element={<Page1/>}/>
    <Route  path='/home' element={<Apps/>}/>
    <Route path='/appointment' element={<Appointment1 />}></Route>
    <Route path='/feedback' element={<Feedback1 />}/>
    <Route path='/aboutus' element={<About1 />}/>
    <Route path='/profile' element={<Profile1/> }></Route>
    <Route path='/help' element={<Help1 />}></Route>
    <Route path='/login'  element={<Login1 />}></Route>
    <Route path='/doctorappointment'  element={<DoctAppo1/>}></Route>
    <Route path='/doctorsignup'  element={<SignupDoctor />}></Route>
    <Route path='/doctorprofile' element={<Dprofile1/>}></Route> 
    <Route path='/loginas'  element={<LoginComponentWithCarousel/>}></Route>
    <Route path='/doctorlogin'  element={<DocLogin/>}></Route>
    <Route path='/adminlogin'  element={<AdminLogin/>}></Route>
    <Route path='/editprofile'  element={<Paitedit/>}></Route>
    <Route path='/editprofiledoc'  element={<Docedit/>}></Route>
    <Route path='/adminhome'  element={<AdminHome1/>}></Route>
    <Route path='/admindoc'  element={<AdminDoc1/>}></Route>
    <Route path='/adminpatient'  element={<AdminPatient1/>}></Route>
   </Routes>
   
   </div> 
  </>
  
  )
}

export default App