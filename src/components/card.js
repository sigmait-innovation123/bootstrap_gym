import React from "react";

export default function Card(props) {
  

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xxl-3 my-4 text-start " >
      <div className="card rto" style={{ width: "18rem"}}>
        <img src={props.img} className="card-img-top" style={{height:"200px", objectFit:"cover", objectPosition:"center"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title text-uppercase">{props.name}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
