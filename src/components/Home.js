import React from "react";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import pic from "../assets/IMG_20210208_132642.jpg";

function Home() {
  return (
    <div className="main-body d-grid ">
      <div className="body-name">
        <h1 className="display-1 ">Hi..</h1>
        <h1 className="display-1">
          I'm{" "}
          <span id="name">
            <b>Jash Sharma</b>
          </span>
        </h1>
        <span id="short-abt">
          I am a skilled{" "}
          <span id="name">
            <b>full-stack web developer</b>
          </span>{" "}
          as well as an entry-level{" "}
          <span id="name">
            <b>data scientist</b>
          </span>
          . Do check out my website portfolio...
        </span>
      </div>
      <div className="container">
        <div className="body-image">
          <img src={pic} alt="Profile" className="pic shadow-lg" />
          <div class="card-img-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
