import { useRef, useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

import LoginStatusContext from "../../../contexts/LoginStatusDataContext";
import users from "../../../data/users.json";
import '../../../App.css';

export default function Login() {

  // uncontrolled username and password
  const usernameRef = useRef();
  const passwordRef = useRef();

  // navigation
  const navigate = useNavigate();

  // get context login data
  const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);
  const [isRegistering, setIsRegistering] = useState(false);

  // handle login
  async function handleLogin(e) {
    e?.preventDefault();
    const username = usernameRef.current.value?.trim();
    const password = passwordRef.current.value?.trim();

    //alert if no username or passoword
    if ((username === "") || (password === "")) {
      alert("You must provide both a username and password!");
      return;
    }

    if (!username.includes("@wisc.edu")) {
      alert("You must provide an @wisc.edu email!");
      return;
    }

    // fetch from local api
    try {
      const res = await fetch('https://p146-backend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      })
      const data = await res.json();
      if (res.status === 200) {
        alert("Your login was successful!");
        setLoginStatus(true);
        localStorage.setItem('loginStatus', JSON.stringify(true));
        console.log("ss login status: ", JSON.parse(localStorage.getItem('loginStatus')));
        localStorage.setItem('username', JSON.stringify(username));
        navigate('/');
      } else {
        alert(data.msg || "Login failed, please try again!");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async function handleRegister(e) {
    e?.preventDefault();
    const username = usernameRef.current.value?.trim();
    const password = passwordRef.current.value?.trim();

    if (!username || !password) {
      alert("You must provide both a username and password!");
      return;
    }

    if (!username.includes("@wisc.edu")) {
      alert("You must provide an @wisc.edu email!");
      return;
    }

    try {
      const res = await fetch('https://p146-backend.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.status === 201) {
        alert("Registration successful! You can now log in.");
        setIsRegistering(false);
        usernameRef.current.value = "";
        passwordRef.current.value = "";
      } else {
        alert(data.msg || "Registration failed, please try again!");
      }
    } catch (error) {
      console.log("error: ", error);
      alert("Network error. Please try again.");
    }
  }

  return <>
    <h1>{isRegistering ? "Register" : "Login"}</h1>
    <Form onSubmit={isRegistering ? handleRegister : handleLogin}>
      <Form.Label htmlFor="usernameLogin">Email</Form.Label>
      <Form.Control id="usernameLogin" ref={usernameRef}></Form.Control>
      <Form.Label htmlFor="passwordLogin">Password</Form.Label>
      <Form.Control id="passwordLogin" type="password" ref={passwordRef}></Form.Control>
      <br />
      <Button style={{ backgroundColor: "red", border: "none" }} type="submit">{isRegistering ? "Register" : "Login"}</Button>
      <br />
      {isRegistering ? (
        <p>Already have an account?{" "}<a class="link-opacity-100" href="#" style={{ color: "red" }}
          onClick={(e) => { e.preventDefault(); setIsRegistering(false); }}>Login here.</a></p>
      ) : (
        <p>Need an account?{" "}<a class="link-opacity-100" href="#" style={{ color: "red" }}
          onClick={(e) => { e.preventDefault(); setIsRegistering(true); }}>Register here.</a></p>
      )}
    </Form>
  </>
}
