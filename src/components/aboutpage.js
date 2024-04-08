import React from "react";

export default function Aboutpage() {
  return (
    <>
      <div
        className="container-fluid  row px-5 d-flex align-items-center "
        style={{ width: "100vw" }}
      >
        <div className="col-12 col-sm-6">
          <div className="mb-3 fw-bold display-5 text-uppercase">About us</div>
          <div className="fs-2 text-muted mb-2 fw-semibold text-uppercase">
            fitness 2.0
          </div>
          <div className="fs-4 lead">
            Welcome
            <mark>
              <strong>fitness2.0</strong>
            </mark>
            , where fitness meets excellence! At our state-of-the-art facility,
            we are dedicated to helping you achieve your fitness goals and lead
            a healthier, more active lifestyle.
          </div>
        </div>
        <div className="col-12 col-sm-6 ">
          <div className="mt-5">
            <img
              style={{
                height: "500px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="card-img-top "
              src="https://source.unsplash.com/random/500×200/?gym"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4 bg-dark ">
        <marquee scrollamount="10" className="display-1 fw-bold py-2 spec-marq text-white ">
          <p>"
            <span>Strength</span>
            <span> doesn't</span>
            <span> come</span>
            <span> from</span>
            <span> the</span>
            <span> body.</span>
            <span> It</span>
            <span> comes</span>
            <span> from</span>
            <span> the</span>
            <span> will.</span>"
          </p>
        </marquee>
        
      </div>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="">
        <path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill " fill="#212529" ></path>
    </svg>
    </>
  );
}
