import React from "react"
import "./ProfileGeneralInfo.css"
import EditPencil from "pages/common/ui/EditPencil/EditPencil"

function ProfileGeneralInfo() {
  return (
    <div className="profileComponent__generalInfo">
      <div className="profileComponent__generalInfo--fullName">
        <p>Full name: Vasya Bulkin</p>
        <EditPencil />
      </div>
      <div className="profileComponent__generalInfo--userName">
        <p>User name: Bulka228</p>
        <EditPencil />
      </div>
      <p className="profileComponent__generalInfo--balance">Balance: 228 BTC</p>
    </div>
  )
}

export default ProfileGeneralInfo
