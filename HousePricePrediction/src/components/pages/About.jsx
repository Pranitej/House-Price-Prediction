import React from "react";
import NavBar from "../NavBar";

export default function About() {
  return (
    <>
      <NavBar page="about" />
      <div class="container mt-5 mb-5">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">House Price Calculation</h5>
          </div>
          <div class="card-body">
            <p class="card-text">
              This house price prediction project utilizes a frontend stack
              comprising React for dynamic user interfaces, HTML for structuring
              the content, CSS for styling, and JavaScript for interactive
              functionality. Bootstrap is employed for responsive design,
              ensuring a seamless user experience across devices. The absence of
              machine learning and data science means that the prediction
              mechanism relies on predefined rules or algorithms without the
              ability to adapt based on data patterns. The application's core
              functionality involves user input for specific house features,
              such as location, size, and amenities, processed through custom
              logic for generating price estimates. The frontend provides an
              intuitive and visually appealing interface for users to input and
              receive predictions. Real-time feedback is incorporated to enhance
              user engagement and experience. The absence of machine learning
              simplifies the project, making it more accessible for developers
              without a background in advanced analytics. The reliance on
              frontend technologies showcases the potential for creating
              practical applications without complex backend systems. The
              project underscores the versatility of web development tools for
              creating valuable and interactive applications beyond traditional
              data-driven approaches.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
