import React from 'react'

function Memes(props) {
  const {desc,img}=props
  return (
    <>
      <div className="card my-2" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text fs-5 fw-bold">{desc}</p>
        </div>
      </div>
    </>
  )
}

export default Memes