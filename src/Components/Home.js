import React, { Component } from "react";
import config from "../config";
import TokenService from "../Service/token-service";
import "./Styling/Home.css";

export default class Home extends Component {
  state = {
    order_items: {},
    location: "",
  };

  handleChange(e) {
    this.setState({
      order_items: { ...this.state.order_items, [e.target.name]: e.target.value },
    });
  }

  toggleItemInList = (itemId) => {
    const { order_items } = this.state;

    if (order_items[itemId]) {
      delete order_items[itemId];
      this.setState({ order_items });
    } else {
      this.setState({
        order_items: { ...this.state.order_items, [itemId]: 0 },
      });
    }
  };

  updateQuantityOfItem = (itemId, quantity) => {
    this.setState({
      order_items: { ...this.state.order_items, [itemId]: quantity },
    });
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

  render() {
    return (
      <div>
        <div>
          <div id='home-body'>
            <h2>Wishlist</h2>
            <form onSubmit={(e) => this.handleSubmit(e)} id='wishlist-form'>
              <label id='location'>
                Location/Address:
                <br />
                <input
                  type='text'
                  maxLength='50'
                  id='location-input'
                  onChange={(e) => this.setLocationOnChange(e.target.value)}
                  required
                />
              </label>

            <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='1'
                  onChange={() => this.toggleItemInList(1)}
                />
                <div className='item-text'>Snack Kit</div>
              </label>

              <label className='quantity-label-and-input'>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) => this.updateQuantityOfItem(1, e.target.value)}
                  />
              </label>
            </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='2'
                  onChange={() => this.toggleItemInList(2)}
                />
                <div className='item-text'>Socks and Underwear</div>
                </label>

                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) => this.updateQuantityOfItem(2, e.target.value)}
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='3'
                  onChange={() => this.toggleItemInList(3)}
                />
                <div className='item-text'>Walking Shoes</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) => this.updateQuantityOfItem(3, e.target.value)}
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='4'
                  onChange={() => this.toggleItemInList(4)}
                />
                <div className='item-text'>Pads/Tampons</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) => this.updateQuantityOfItem(4, e.target.value)}
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='5'
                  onChange={() => this.toggleItemInList(5)}
                />
                <div className='item-text'>First Aid Kit</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) => this.updateQuantityOfItem(5, e.target.value)}
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='6'
                  onChange={() => this.toggleItemInList(6)}
                />
                <div className='item-text'>Dental Care Kit</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) => this.updateQuantityOfItem(6, e.target.value)}
                />
              </label>
              </div>
              

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='7'
                  onChange={() => this.toggleItemInList(7)}
                />
                <div className='item-text'>Deodorant and Soap</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) => this.updateQuantityOfItem(7, e.target.value)}
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='8'
                  onChange={() => this.toggleItemInList(8)}
                />
                <div className='item-text'>Earplugs</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) => this.updateQuantityOfItem(8, e.target.value)}
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='9'
                  onChange={() => this.toggleItemInList(9)}
                />
                <div className='item-text'>Face Mask, Sanitizer, Gloves</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) => this.updateQuantityOfItem(9, e.target.value)}
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='10'
                  onChange={() => this.toggleItemInList(10)}
                />
                <div className='item-text'>Blanket</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) =>
                    this.updateQuantityOfItem(10, e.target.value)
                  }
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='11'
                  onChange={() => this.toggleItemInList(11)}
                />
                <div className='item-text'>Diapers, Wipes, Baby Clothes</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) =>
                    this.updateQuantityOfItem(11, e.target.value)
                  }
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='12'
                  onChange={() => this.toggleItemInList(12)}
                />
                <div className='item-text'>Baby Formula</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) =>
                    this.updateQuantityOfItem(12, e.target.value)
                  }
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='13'
                  onChange={() => this.toggleItemInList(13)}
                />
                <div className='item-text'>School Supplies</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) =>
                    this.updateQuantityOfItem(13, e.target.value)
                  }
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='14'
                  onChange={() => this.toggleItemInList(14)}
                />
                <div className='item-text'>Notepad and Pens</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) =>
                    this.updateQuantityOfItem(14, e.target.value)
                  }
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='15'
                  onChange={() => this.toggleItemInList(15)}
                />
                <div className='item-text'>Hat, Mittens, Scarf</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) =>
                    this.updateQuantityOfItem(15, e.target.value)
                  }
                />
              </label>
              </div>

              <div className='item'>
              <label className='item-label'>
                <input
                  type='checkbox'
                  className='checkbox-btn'
                  value='16'
                  onChange={() => this.toggleItemInList(16)}
                />
                <div className='item-text'>Sweater/Jacket</div>
                </label>
                <label>
                <div className='quantity-label'>Quantity</div>
                <input
                  type='number'
                  className='quantity'
                  min='0'
                  max='20'
                  onChange={(e) =>
                    this.updateQuantityOfItem(16, e.target.value)
                  }
                />
              </label>
              </div>

              <button type='submit' id='wishlist-sbt-btn'>
                Submit List
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
