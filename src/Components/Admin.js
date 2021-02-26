import React, { Component } from "react";
import config from "../config";
import { AppContext } from '../AppContext'
import "./Styling/Admin.css";

export default class Admin extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
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
            <table>
              <tr>
                <th>Order ID</th>
                <th>Phone Number</th>
                <th>Item</th>
                <th>Location/Address</th>
              </tr>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className='order-attribute-id'>{order.order_id}</td>
                  <td className='order-attribute-pn'>{order.phone_number}</td>
                  <td className='order-attribute'>{order.product}</td>
                  <td className='order-attribute-location'>{order.location}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
