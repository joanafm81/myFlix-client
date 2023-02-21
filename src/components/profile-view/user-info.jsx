import React from "react";

export const UserInfo = ({ username, email }) => {

  return (
    <>
      <p>
        <label>Username</label>
        <span>{username}</span>
      </p>
      <p>
        <label>Email</label>
        <span>{email}</span>
      </p>
    </>

  )

}