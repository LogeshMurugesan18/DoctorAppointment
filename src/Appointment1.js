import React from 'react'

import MediaCard from "./appoinments/appoinment";
import ContainedButtons from "./appoinments/btnappo";
import InputSlotProps from "./appoinments/calendar";
import ClippedDrawer from "./home/top";
import ControlledOpenSelect from './appoinments/Time';
function Appointment1() {
  return (
   <>
   <ClippedDrawer/>
<InputSlotProps/>
<MediaCard/>
<ContainedButtons/> 
<ControlledOpenSelect/>
   </>
  )
}

export default Appointment1;