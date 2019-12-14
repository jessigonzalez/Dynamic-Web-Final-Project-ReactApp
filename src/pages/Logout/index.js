import React from 'react'
//import LogoutForm from "../../components/LogoutForm"

export default function Logout({logoutFunction}){
  return(
    <div>
      <div>Logging out</div>
      <Logout submitFunction={logoutFunction}/>
    </div>
  );
}
