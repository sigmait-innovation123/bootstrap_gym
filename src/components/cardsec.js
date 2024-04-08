import React from 'react'
import Card from './card'

export default function Cardsec() {

  const facilities = [
    {
      name: "Cardio Zone",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KS3CafftOy-nfDRyXlaUq72_eDJTERSFgzNvIKjY1w&s",
      description: "Equipped with modern treadmills, elliptical machines, and stationary bikes.",
      category: "cardio",
    },
    {
      name: "Weightlifting Area",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdaMJvy09Iq6If55M4m6JjYHLBlm6QbSQjcqPfq2cww&s",
      description: "Dumbbells, barbells, and weight machines for strength training.",
      category: "strength",
    },
    {
      name: "Group Classes",
      img: "https://hips.hearstapps.com/hmg-prod/images/cross-training-royalty-free-image-1589836587.jpg",
      description: "Various fitness classes including yoga, Zumba, and spinning.",
      category: "classes",
    },
    {
      name: "Swimming Pool",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiBWleOz3a9ND92GWPzSy1blAfMkzIC0gBV8Yz4ajkQ&s",
      description: "Indoor pool for lap swimming and aquatic workouts.",
      category: "aquatics",
    },
    {
      name: "Personal Training",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9U7Dv7sblxAUle0Fh7YZ0uRvQYRPOyMGQs_PVBzmLA&s",
      description: "One-on-one sessions with certified personal trainers.",
      category: "training",
    },
  ]



  return (
    <div className='container-fluid px-5 d-flex row ' style={{width:'100vw'}}>

        {facilities.map((fac)=><Card name={fac.name} img={fac.img} description={fac.description} category={fac.category}/>)}
        
        <hr className='mt-5'></hr>
    </div>
  )
}
