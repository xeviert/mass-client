import React, { Component } from "react";
import config from "../config";
import TokenService from "../Service/token-service";
import "./Styling/Home.css";

export default class Home extends Component {
  state = {
    order_items: {},
    checked_items: {},
    location: "",
  };

  handleChange(e) {
    this.setState({
      order_items: { ...this.state.order_items, [e.target.name]: e.target.value },
    });
  }

  toggleItemInList = (itemId) => {
    const { order_items, checked_items } = this.state;

    if (checked_items[itemId]) {
      delete order_items[itemId];
      delete checked_items[itemId];
      this.setState({ order_items, checked_items });
    } else {
      this.setState({
        checked_items: { ...checked_items, [itemId]: true },
        order_items: { ...order_items, [itemId]: 0 },
      });
    }
  };

  updateQuantityOfItem = (itemId, quantity) => {
    const parsedQuantity = parseInt(quantity, 10);
    if (!isNaN(parsedQuantity)) {
      this.setState({
        order_items: { ...this.state.order_items, [itemId]: parsedQuantity },
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      location: this.state.location,
      order_items: this.state.order_items,
    };

    fetch(`${config.API_ENDPOINT}/orders`, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        alert(
          "Thank you! Wishlist has been submitted. We will send out a text shortly to confirm when we will see you"
        );
        this.setState({
          location: "",
          order_items: {},
          checked_items: {},
        });
        this.resetForm();
      })
      .catch((e) => {
        this.setState({ error: e.message });
      });
  };

  resetForm() {
    const wishListForm = document.getElementById("wishlist-form");
    wishListForm.reset();
  }

  setLocationOnChange = (location) => {
    this.setState({ location });
  };

  renderItemList = () => {
    const items = [
      { id: 1, name: "Snack Kit" },
      { id: 2, name: "Socks and Underwear" },
      { id: 3, name: "Walking Shoes" },
      { id: 4, name: "Pads/Tampons" },
      { id: 5, name: "First Aid Kit" },
      { id: 6, name: "Dental Care Kit" },
      { id: 7, name: "Deodorant and Soap" },
      { id: 8, name: "Earplugs" },
      { id: 9, name: "Face Mask, Sanitizer, Gloves" },
      { id: 10, name: "Blanket" },
      { id: 11, name: "Diapers, Wipes, Baby Clothes" },
      { id: 12, name: "Baby Formula" },
      { id: 13, name: "School Supplies" },
      { id: 14, name: "Notepad and Pens" },
      { id: 15, name: "Hat, Mittens, Scarf" },
      { id: 16, name: "Sweater/Jacket" },
      { id: 17, name: "Narcan/Naloxone" },
    ];

    return (
      <div>
        {items.map((item) => (
          <div className="item" key={item.id}>
            <label className="item-label">
              <input
                type="checkbox"
                className="checkbox-btn"
                value={item.id}
                onChange={() => this.toggleItemInList(item.id)}
              />
              <div className="item-text">{item.name}</div>
            </label>

            <label className="quantity-label-and-input">
              <div className="quantity-label">Quantity</div>
              <input
                type="number"
                className="quantity"
                min="0"
                max="20"
                disabled={!this.state.checked_items[item.id]}
                value={this.state.order_items[item.id] || ""}
                onChange={(e) =>
                  this.updateQuantityOfItem(item.id, e.target.value)
                }
              />
            </label>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>
          <div id="home-body">
            <h2>Wishlist</h2>
            <form onSubmit={(e) => this.handleSubmit(e)} id="wishlist-form">
              <label id="location">
                Location/Address:
                <br />
                <input
                  type="text"
                  maxLength="50"
                  id="location-input"
                  onChange={(e) => this.setLocationOnChange(e.target.value)}
                  required
                />
              </label>

              {this.renderItemList()}

              <button type="submit" id="wishlist-sbt-btn">
                Submit List
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
