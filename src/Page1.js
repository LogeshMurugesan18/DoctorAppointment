import React from 'react'
import DrawerAppBar from "./page/header";
import DisableElevation from "./page/drawer";
import ImgMediaCard from "./page/image";
import Footer from "./page/footer";
import ActionAreaCard from "./page/image2";
import './App.css'
function Page1() {
  return (
    <>
      <div className='jk'>
        
      <DrawerAppBar/>
    <DisableElevation/>
   <ImgMediaCard/>
  <ActionAreaCard/>
   <Footer/>
   </div>
    </>
  )
}

export default Page1