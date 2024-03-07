import React from 'react'

import DescriptionAlerts from "./feedback/alert";
import ClippedDrawer from "./home/top";
import InputFormProps from "./feedback/fbck";
function Feedback1() {
  return (
    <>
    {/* <div className='jj'> */}
      <ClippedDrawer />
    <DescriptionAlerts/>
   <InputFormProps/>
   {/* </div> */}
   </>
  )
}

export default Feedback1