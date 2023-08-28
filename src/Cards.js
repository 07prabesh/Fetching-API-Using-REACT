import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Cards = (values) => {
  return (
   

<div className="col-md-3">

<div class="card">
  <img src={values.image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">paragraph.</p>
    <to href="#" class="btn btn-primary">Go somewhere</to>
  </div>
</div>


      




      
    </div>
  )
}

export default Cards

