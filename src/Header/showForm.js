import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/footer";
import Navbars from "./navbar";

function ShowForm() {
  let location = useLocation();
  let data = location.state;
  console.log(location.state);

  return (
    <div>
      <div id="show">
            <Navbars/>
        <div className="alert alert-success mt-3">
          Thank for your connecting with us. Here's what we got from you !
        </div>
        <ul className="list-group">
          <li className="list-group-item">Email: {data.email}</li>
          <li className="list-group-item">Full Name: {data.name}</li>
          <li className="list-group-item">Phone: {data.phone}</li>
          <li className="list-group-item">Gender: {data.gender}</li>
        </ul>
      </div>
         <Footer/>
    </div>
  );
}
export default ShowForm;