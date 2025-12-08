import { useRef, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

import LoginStatusContext from "../../../contexts/LoginStatusDataContext";
import users from "../../../data/users.json";

export default function Login() {

  // uncontrolled username and password
  const usernameRef = useRef();
  const passwordRef = useRef();

  // navigation
  const navigate = useNavigate();

  // get context login data
  const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);

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
        sessionStorage.setItem('loginStatus', JSON.stringify(true));
        console.log("ss login status: ", JSON.parse(sessionStorage.getItem('loginStatus')));
        sessionStorage.setItem('username', JSON.stringify(username));
        navigate('/');
      } else {
        alert(data.msg || "Login failed, please try again!");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return <>
    <h1>Login</h1>
    <Form onSubmit={handleLogin}>
      <Form.Label htmlFor="usernameLogin">Email</Form.Label>
      <Form.Control id="usernameLogin" ref={usernameRef}></Form.Control>
      <Form.Label htmlFor="passwordLogin">Password</Form.Label>
      <Form.Control id="passwordLogin" type="password" ref={passwordRef}></Form.Control>
      <br />
      <Button type="submit">Login</Button>
    </Form>
  </>
}
