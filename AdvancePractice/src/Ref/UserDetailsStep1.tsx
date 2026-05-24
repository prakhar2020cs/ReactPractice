import React from 'react'

type Props = {
  data: { firstName: string; lastName: string; email: string }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserDetailsStep1: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div style={{ maxWidth: 460 }}>
      <h3>User Details</h3>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" value={data.firstName} onChange={onChange} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" value={data.lastName} onChange={onChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={data.email} onChange={onChange} />
      </div>
    </div>
  )
}

export default UserDetailsStep1