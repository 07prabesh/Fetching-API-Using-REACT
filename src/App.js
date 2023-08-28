import './App.css';
import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {

  const [data, SetData] = useState([]);

  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    SetData(jsonData);

  }

  return (
    <>

      <h1 className='header'>Fake  Online Store</h1>


      <div className="container">
        <div className="row">

          {data.map((values) => {
            return (
              <>


                <div className="col-md-3 ">

                  <div class="card hello-card p-3  ">
                    <img src={values.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title text-truncate">{values.title}</h5>
                      <p class="card-text "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nulla! </p>
                      <p class="card-text">${values.price}</p>
                      <to href="#" class="btn btn-danger button">Buy Now</to>
                    </div>
                  </div>

                </div>
              </>


            )
          })}

        </div>
      </div>


    </>

  );
}

export default App;