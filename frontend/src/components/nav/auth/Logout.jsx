import resourcesData from '../../../data/resources.json';
import LoginStatusContext from "../../../contexts/LoginStatusDataContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router";

export default function Logout() {

  const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);
  // navigation
  const navigate = useNavigate();

  useEffect(() => {
    handleLogout();
  }, []);

  async function handleLogout() {
    // fetch from local api
    try {
      const res = await fetch('https://p146-backend.onrender.com/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await res.json();
      if (res.status === 200) {
        alert("Your logout was successful!");
        setLoginStatus(false);
        localStorage.setItem('loginStatus', JSON.stringify(false));
        navigate('/');
      } else {
        alert(data.msg || "Login failed, please try again!");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return <>
    <h1>Please wait while we log you out!frontend/src/components/nav/pages/Availability.jsx</h1>
  </>
}
