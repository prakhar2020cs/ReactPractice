import React, { useEffect, useState } from 'react'

type Props = {
  data: { username: string; email: string; password: string; confirm: string }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UserAccountDetailsStep2: React.FC<Props> = ({ data, onChange }) => {
const [error, setError] = useState({

})


useEffect(()=>{ console.log("handleError", data.confirm, data.password, error), handleError()},[data])

console.log("error",error) 
const handleError =()=>{   
    const validEmailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // console.log("handleError", data.confirm, data.password)
    if(data.confirm && data.confirm !== data.password) setError((prevs)=>({...prevs, confirm:'password and confirm should be same'}))
    else setError((prevs)=>({...prevs, confirm:''}))

     if(data.username && data.username.length <5) setError((prevs)=>({...prevs, username:'username should be at least 5 characters'}))
    else setError((prevs)=>({...prevs, username:''}))

      if(data.username && !validEmailPattern.test(data.email)) setError((prevs)=>({...prevs, email:'Enter a Valid Email'}))
    else setError((prevs)=>({...prevs, email:''}))
    
}

  return (
    <div style={{ maxWidth: 460 }}>
      <h3>User Account Details</h3>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Username</label>
        <input name="username" value={data.username} onChange={onChange} />
                {error.username&&<p style={{color:'red'}}>{error.username}</p>}

      </div>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Email</label>
        <input name="email" value={data.email} onChange={onChange} type="email" />
                {error.email&&<p style={{color:'red'}}>{error.email}</p>}

      </div>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Password</label>
        <input name="password" value={data.password} onChange={onChange} type="password" />
                {error.password&&<p style={{color:'red'}}>{error.password}</p>}

      </div>
      <div style={{ marginBottom: 8 }}>
        <label style={{ display: 'block', fontSize: 12 }}>Confirm Password</label>
        <input  name="confirm" value={data.confirm} onChange={(e)=>{onChange(e);}} type="password" />
        {error.confirm&&<p style={{color:'red'}}>{error.confirm}</p>}
      </div>
    </div>
  )
}

export default UserAccountDetailsStep2