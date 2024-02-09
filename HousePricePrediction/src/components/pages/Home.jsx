import React from "react";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <>
      <NavBar page="home" />
      <div className="container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-2">
              <img
                src="https://wallpapercave.com/dwp1x/wp11155303.jpg"
                alt="Network Error"
                width={"90%"}
                height={"90%"}
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 mt-5">
              <h3 style={{ textAlign: "center" }}>
                The primary goal of this project is to offer users a quick and
                accessible way to estimate house prices using a rule-based
                approach. Unlike traditional machine learning models, our system
                utilizes predefined rules and heuristics to calculate the
                estimated price.
              </h3>
            </div>
          </div>
        </div>
        <hr />
        <div class="container">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <h3 style={{ textAlign: "center" }}>
                Our vision is to empower users with a reliable tool for property
                valuation that doesn't require a complex understanding of
                machine learning. We want to bridge the gap between data-driven
                insights and user-friendly interfaces in the real estate domain.
              </h3>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 mt-5">
              <img
                src="https://wallpapercave.com/wp/wp1842341.jpg"
                alt="Network Error"
                width={"90%"}
                height={"90%"}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-grid gap-2 col-3 mx-auto mt-5 mb-5">
        <button
          class="btn btn-primary"
          type="button"
          onClick={() => {
            nav("/checkprice");
          }}
        >
          Check Price
        </button>
      </div>
    </>
  );
}
