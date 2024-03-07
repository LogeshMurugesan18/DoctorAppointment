import React from "react";
import './App.css';
import {Routes,Route} from 'react-router-dom'
// import AboutUsPage from "./AboutUs/About";
// import ClippedDrawer from "./home/top";


// import DescriptionAlerts from "./feedback/alert";
// import ClippedDrawer from "./home/top";
// import InputFormProps from "./feedback/fbck";

// import Types from "./Help/help";
// import ClippedDrawer from "./home/top";

// import Logsign from "./LoginSignuo/LogSignup";
// import ClippedDrawer from "./home/top";

// import DrawerAppBar from "./page/header";
// import DisableElevation from "./page/drawer";
// import ImgMediaCard from "./page/image";
// import Footer from "./page/footer";
// import ActionAreaCard from "./page/image2";

// import ClippedDrawer from "./home/top";
// import LabelAndHelperText from "./home/search";
// import BasicButtons from "./home/nextbtn";
 
 
// import MediaCard from "./appoinments/appoinment";
// import GroupSizesColors from "./appoinments/Time";
// import ContainedButtons from "./appoinments/btnappo";
import InputSlotProps from "./appoinments/calendar";
// import MenuAppBar from "./appoinments/apptop";
// import ClippedDrawer from "./home/top";


// import ProfilePage from "./Profile/profile";


 




const App=()=> {
  return (
    <>
{/* 
<ClippedDrawer/> 
<LabelAndHelperText/>
<BasicButtons/> */}

<Routes path='/' element={<App />} >
  <Route path='/appointment'element={<InputSlotProps/>} />
</Routes>
{/* 
<ProfilePage/> */}


  
{/* Feedback
<ClippedDrawer/>
  <DescriptionAlerts/>
 <InputFormProps/> */}


{/*help 
<Types/>
<ClippedDrawer/> */}


    
 {/*<Logsign/>
 <ClippedDrawer/>*/}


{/*  About us
<ClippedDrawer/>
 <AboutUsPage/> */}
 

{/* Appointment
 <ClippedDrawer/>
<InputSlotProps/>
<MediaCard/>
<GroupSizesColors/>
<ContainedButtons/> */}


 

   
    
{/*  page   
     <DrawerAppBar/>
    <DisableElevation/>
   <ImgMediaCard/>
  <ActionAreaCard/>
   <Footer/> */}
    </>
  );
}

export default App;
