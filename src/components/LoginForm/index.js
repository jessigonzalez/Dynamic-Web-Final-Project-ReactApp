import React from 'react'

export default function LoginForm( {submitFunction} ) {
  return(
    <div>
      <form onSubmit = {(e) => {submitFunction(e)}}>
        <label htmlFor="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email"/>
        <label htmlFor="loginPassword">Password</label>
        <input type="password" name="loginPassword" placeholder="password"/>
        <button>Log in </button>
      </form>
    </div>
  );
}
