import React from 'react'

type Props = {
  user: { firstName: string; lastName: string; email: string }
  account: { username: string; email: string }
  vehicle: { make: string; model: string; year: string; registration: string; color: string }
  onEdit: (stepIndex: number) => void
  onSubmit: () => void
}

const UserReviewStep: React.FC<Props> = ({ user, account, vehicle, onEdit, onSubmit }) => {
  return (
    <div style={{ maxWidth: 620 }}>
      <h3>Review</h3>

      <section style={{ marginBottom: 12 }}>
        <strong>User</strong>
        <div>First Name: {user.firstName || '-'}</div>
        <div>Last Name: {user.lastName || '-'}</div>
        <div>Email: {user.email || '-'}</div>
        <button onClick={() => onEdit(0)} style={{ marginTop: 6 }}>Edit</button>
      </section>

      <section style={{ marginBottom: 12 }}>
        <strong>Account</strong>
        <div>Username: {account.username || '-'}</div>
        <div>Email: {account.email || '-'}</div>
        <button onClick={() => onEdit(1)} style={{ marginTop: 6 }}>Edit</button>
      </section>

      <section style={{ marginBottom: 12 }}>
        <strong>Vehicle</strong>
        <div>Make: {vehicle.make || '-'}</div>
        <div>Model: {vehicle.model || '-'}</div>
        <div>Year: {vehicle.year || '-'}</div>
        <div>Registration: {vehicle.registration || '-'}</div>
        <div>Color: {vehicle.color || '-'}</div>
        <button onClick={() => onEdit(2)} style={{ marginTop: 6 }}>Edit</button>
      </section>

      <div style={{ marginTop: 16 }}>
        <button onClick={onSubmit}>Submit Registration</button>
      </div>
    </div>
  )
}

export default UserReviewStep