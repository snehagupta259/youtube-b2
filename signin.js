import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import credential from './useful-data-main/credential.json'


function Signin() {

    const [email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const submitHandler= () => {
      console.log("submit handler")
      const emailId = document.getElementById('exampleInputEmail1');
      const pass = document.getElementById('exampleInputPassword1');
    }
  return (
    <div class="signin">
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link to={'/'}>
  <button class="btn btn-secondary">Back</button>
  </Link>
  <button
  onClick={() => submitHandler()}
  class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signin
