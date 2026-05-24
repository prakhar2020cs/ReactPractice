import React, { useEffect, useState } from 'react'

type Props = {
  data: { username: string; email: string; password: string; confirm: string }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserAccountDetailsStep2: React.FC<Props> = ({ data, onChange }) => {
  const validEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const errors = {
  username:
    data.username && data.username.length < 5
      ? 'username should be at least 5 characters'
      : '',

  email:
    data.email && !validEmailPattern.test(data.email)
      ? 'Enter a Valid Email'
      : '',

  confirm:
    data.confirm && data.confirm !== data.password
      ? 'password and confirm should be same'
      : ''
}

  return (
    <div style={{ maxWidth: 460 }}>
      <h3>User Account Details</h3>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Username</label>
        <input name="username" value={data.username} onChange={onChange} />
{errors.username && (<p style={{ color: 'red' }}>{errors.username}</p>)}

      </div>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Email</label>
        <input name="email" value={data.email} onChange={onChange} type="email" />
{errors.email && (<p style={{ color: 'red' }}>{errors.email}</p>)}

      </div>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Password</label>
        <input name="password" value={data.password} onChange={onChange} type="password" />
{errors.password && (<p style={{ color: 'red' }}>{errors.password}</p>)}
      </div>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Confirm Password</label>
        <input  name="confirm" value={data.confirm} onChange={(e)=>{onChange(e);}} type="password" />
{errors.confirm && (<p style={{ color: 'red' }}>{errors.confirm}</p>)}
      </div>
    </div>
  )
}

export default UserAccountDetailsStep2