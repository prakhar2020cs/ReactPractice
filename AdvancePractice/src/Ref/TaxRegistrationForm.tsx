import React, { useState } from 'react'
import UserDetailsStep1 from './UserDetailsStep1'
import UserAccountDetailsStep2 from './UserAccountDetailsStep2'
import UserVehicleDetailsStep3 from './UserVehicleDetailsStep3'
import UserReviewStep from './UserReviewStep'

const steps = ['User Details', 'Account Details', 'Vehicle Details', 'Review']

const TaxRegistrationForm: React.FC = () => {
  const [step, setStep] = useState(0)

  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' })
  const [account, setAccount] = useState({ username: '', email: '', password: '', confirm: '' })
  const [vehicle, setVehicle] = useState({ make: '', model: '', year: '', registration: '', color: '' })

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

        const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target
            setAccount(prev => ({ ...prev, [name]: value }))
        }

  const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setVehicle(prev => ({ ...prev, [name]: value }))
  }

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1))
  const back = () => setStep(s => Math.max(s - 1, 0))

  const handleSubmit = () => {
    console.log('Final submission', { user, account, vehicle })
    alert('Registration submitted (check console)')
  }


  const moveToStep =(step:number)=>{
        setStep(step)
  }
  return (
    <div>
      <h1>Tax Registration Form</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {steps.map((label, i) => (
          <div  onClick={()=>moveToStep(i)} key={label} style={{cursor:'pointer', padding: 8, borderBottom: i === step ? '3px solid #1976d2' : '3px solid transparent' }}>
            {label}
          </div>
        ))}
      </div>

      <div>
        {step === 0 && <UserDetailsStep1 data={user} onChange={handleUserChange} />}
        {step === 1 && <UserAccountDetailsStep2 data={account} onChange={handleAccountChange} />}
        {step === 2 && <UserVehicleDetailsStep3 data={vehicle} onChange={handleVehicleChange} />}
        {step === 3 && (
          <UserReviewStep
            user={user}
            account={{ username: account.username, email: account.email }}
            vehicle={vehicle}
            onEdit={i => setStep(i)}
            onSubmit={handleSubmit}
          />
        )}
      </div>

      <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
        {step > 0 && <button onClick={back}>Back</button>}
        {step < steps.length - 1 && <button onClick={next}>Next</button>}
      </div>
    </div>
  )
}

export default TaxRegistrationForm