import React from "react"
import "./ProfileComponent.css"
import ProfileHeader from "../ProfileHeader/ProfileHeader"
import InfoCard from "../InfoCard/InfoCard"
import ProfileGeneralInfo from "./ProfileGeneralInfo/ProfileGeneralInfo"
import ProfileAuthentication from "./ProfileAuthentication/ProfileAuthentication"

function ProfileComponent() {
  return (
    <div className="profileComponent">
      <ProfileHeader title="Profile" />
      <div className="profileComponent__wrapper">
        <InfoCard
          title={"General Information"}
          content={<ProfileGeneralInfo />}
        />
        <InfoCard
          title={"Authentication"}
          content={<ProfileAuthentication />}
        />
      </div>
    </div>
  )
}

export default ProfileComponent
