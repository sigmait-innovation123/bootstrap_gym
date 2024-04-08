import React from "react";

export default function Contactus() {
  return (
    <>
    <div className="row p-5 justify-content-center " >
      <div className="col-12 fw-bold display-5 ">Contact us</div>
      <div className="row g-3 px-0 col-12 justify-content-center  ">
        <div className="col-6 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div className="col-6 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="row g-3 px-0  col-12 justify-content-center  ">
        <div className="col-6 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Phone no"
            aria-label="First name"
          />
        </div>
        <div className="col-6 col-md-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="row px-0 mt mt-3 col-12 justify-content-center ">
        <div className="form-floating col-12 col-md-8   ">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          ></textarea>
          <label htmlFor="floatingTextarea2" className="ms-2">Comments</label>
        </div>
      </div>
      <div className="justify-content-center col-12"><button className="btn btn-outline-primary col-4  mt-3">submit</button></div>
      
    </div>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="bg-dark">
    <path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill " fill="#FFFFFF" ></path>
</svg></>
  );
}
