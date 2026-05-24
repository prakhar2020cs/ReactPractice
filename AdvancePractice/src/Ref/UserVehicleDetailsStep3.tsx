import React from 'react'

type Vehicle = {
  make: string
  model: string
  year: string
  registration: string
  color: string
}

type Props = {
  data: Vehicle
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserVehicleDetailsStep3: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div style={{ maxWidth: 460 }}>
      <h3>User Vehicle Details</h3>

      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Make</label>
        <input name="make" value={data.make} onChange={onChange} />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Model</label>
        <input name="model" value={data.model} onChange={onChange} />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Year</label>
        <input name="year" type="number" value={data.year} onChange={onChange} />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Registration</label>
        <input name="registration" value={data.registration} onChange={onChange} />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Color</label>
        <input name="color" value={data.color} onChange={onChange} />
      </div>
    </div>
  )
}

export default UserVehicleDetailsStep3