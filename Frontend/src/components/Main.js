import React, {useEffect} from 'react';
import List from './List';
import image from '../images/mainpage.png';
import {getUsername, isAuthenticated} from "../pages/login-helper";
import { left } from '@popperjs/core';
let apiURL = process.env.REACT_APP_APIURL || 'http://localhost:3000'


export default function Main() {

  const [tickets, setTickets] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (!isAuthenticated()) return;
    async function fetchData() {
      try {
        let response = await fetch(`${apiURL}/ticket`);
        if (!response.ok) {
          console.log(response);
          return;
        }
        let data = await response.json();
        let allTickets = data.list;
        setTickets(allTickets.filter(ticket => ticket.user.username === getUsername()));
        setLoading(false);
      }catch (e) {
        console.log(e);
      }
    }
    fetchData().then();
  }, []);

  return (
    <body>
      <div style={{ backgroundColor: '#08181C', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding:"20px", paddingTop: '20px'}}>
        <div>
          <div style={{textAlign:"center"}}>
            <h1 style={{color:"white", textAlign:"center", paddingLeft:"100px", paddingRight:"100px", paddingTop:"80px", paddingBottom:"20px"}}>Empower Your Team, Unleash Creativity: Where Collaboration Meets Simplicity!</h1>
            <table style={{width:"100%"}}>
              <tr>
                <td style={{textAlign:"right", paddingRight:"0px", marginRight:"0px", width:"50%"}}>
                  <table>
                    <tr>
                      <td>
                        <h2 className={"text-primary"} style={{paddingRight:"50px", fontSize:"50px"}}><b>OVERVIEW</b></h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={"text-secondary"} style={{paddingRight:"50px"}}>
                        Welcome to the Deskify Help Desk website design document. This document
                        serves as a comprehensive blueprint for the construction and
                        implementation of our online support platform. Deskify is conceived as a
                        user-centric help desk solution that aims to streamline customer
                        service operations and enhance user engagement through efficient
                        ticketing and support mechanisms. This introduction outlines our vision,
                        objectives, and the scope of functionality intended for Deskify.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td style={{textAlign:"left", paddingLeft:"0px", marginLeft:"0px"}}>
                 <img src={image} alt="left" height="500" style={{paddingTop:"0px"}} />
                </td>
              </tr>
            </table>

            {isAuthenticated() && (
                <>
                  <h3 className={"text-primary"} style={{marginTop:"40px"}}>YOUR TICKETS: </h3>
                  <List tickets={tickets} loading={loading}/>
                </>
            )}
          </div>
        </div>
      </div>
    </body>
  );
}