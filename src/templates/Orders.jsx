import React from 'react'

import "@styles/Orders.scss";

const Orders = () => {
  return (
    <div className="Orders">
        <div className="my-orders-container">
            <h1 className="title">My orders</h1>
            <div className="my-orders-content">
              <div className="OrderItem">
                  <figure>
                      <img 
                      src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                      alt="product bike" />
                  </figure>
                  <p>Bike</p>
                  <p>$30.00</p>
              </div>
              <div className="OrderItem">
                  <figure>
                      <img 
                      src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                      alt="product bike" />
                  </figure>
                  <p>Bike</p>
                  <p>$30.00</p>
              </div>
              <div className="OrderItem">
                  <figure>
                      <img 
                      src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                      alt="product bike" />
                  </figure>
                  <p>Bike</p>
                  <p>$30.00</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Orders;