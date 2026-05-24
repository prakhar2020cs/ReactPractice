import React from 'react'
import UserDetailsStep1 from './UserDetailsStep1'
import UserAccountDetailsStep2 from './UserAccountDetailsStep2'
import UserVehicleDetailsStep3 from './UserVehicleDetailsStep3'
import UserReviewStep from './UserReviewStep'

const TaxRegistrationForm = () => {
  return (
    <div>
<h1>TaxRegistrationForm</h1>

<UserDetailsStep1/>
<UserAccountDetailsStep2/>
<UserVehicleDetailsStep3/>
<UserReviewStep/>
    </div>



  )
}

export default TaxRegistrationForm