import React from 'react'

const Cardi = (props) => {
   return(
    
    <div className="col-4">
    <div className="cardi" style={{width: "18 rem"}}>
      <img
        src="https://images.hindustantimes.com/img/2021/06/02/550x309/9a156550-c367-11eb-9d53-2d5cae187b44_1622619423185.jpg"
        className="card-img-top"
        alt="..."/>
        
      
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">
         {props.cardDescription}
        </p>
        <a href="#" className="btn btn-success">{props.buttonText}</a>
      </div>
    </div>
  </div>
 
  
 
    
   )
}


export default Cardi