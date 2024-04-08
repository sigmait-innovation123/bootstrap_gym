import React from 'react'

export default function Herosec() {
  return (
    <div><div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/500×200/?bodybuilder" className="d-block w-100" style={{maxHeight:"550px",  objectFit:"cover", objectPosition:"center"}} alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Search Products</h5>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{position:"", top:"50px", textAlign:"center"}}/>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/500×200/?gym" className="d-block w-100" style={{maxHeight:"550px",  objectFit:"cover", objectPosition:"center"}} alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/500×200/?muscles" className="d-block w-100" style={{maxHeight:"550px",  objectFit:"cover", objectPosition:"center"}} alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Search Products</h5>
          <p>Some representative placeholder content for the second slide.</p>
          
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
