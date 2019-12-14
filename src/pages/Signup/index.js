import React from 'react'

import CreateUserForm from "../../components/CreateUserForm"

export default function Signup( {signupFunction} ){
  return(
    <div>
      <div>Sign up</div>
      <CreateUserForm submitFunction={signupFunction}/>
    </div>
  );
}
