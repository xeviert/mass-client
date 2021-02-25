import React, { Component } from "react";
import config from "../config";
import './Styling/Admin.css'

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    this.getAllOrders();
  }

  getAllOrders() {
    return fetch(`${config.API_ENDPOINT}/admin/orders`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((orders) => {
        this.setState({ orders });
      });
  }

  render() {
    const { orders } = this.state;
    return (
      <div>
        <div className='page-body'>
          <h2>Wishlist Orders</h2>

          <div id='admin-page-body'>
            {orders.map(order => (
              <div className='single-order'>
                <div className='order-attribute'>{order.phone_number}</div>
                <div className='order-attribute'>{order.product}</div>
                <div className='order-attribute'>{order.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
