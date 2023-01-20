import React from "react"
import "./ProfileAuthentication.css"
import EditPencil from "pages/common/ui/EditPencil/EditPencil"

function ProfileAuthentication() {
  return (
    <div className="profileComponent__authentication">
      <p className="profileComponent__authentication--email">
        Email: 1488@228.37 <EditPencil />
      </p>
      <p className="profileComponent__authentication--password">
        Password: ******* <EditPencil />
      </p>
      <button className="profileComponent__authentication--btnChange">
        Change
      </button>
    </div>
  )
}

export default ProfileAuthentication
