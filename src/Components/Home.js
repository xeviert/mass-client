import React, { Component } from "react";
import "./Styling/Home.css";

export default class Home extends Component {
  state = {
    items: {},
  };

  handleChange(e) {
    this.setState({
      items: { ...this.state.items, [e.target.name]: e.target.value },
    });
  }

  toggleItemInList = (itemId) => {
    const { items } = this.state;

    if (items[itemId]) {
        delete items[itemId]
        this.setState({ items })
      } else {
        this.setState({
          items: { ...this.state.items, [itemId]: 0 }
        });
      }
  };

  updateQuantityOfItem = (itemId, quantity) => {
    this.setState({
      items: { ...this.state.items, [itemId]: quantity },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.items);
  };

  render() {
    return (
      <div>
        <div className='page-body'>
          <h2>Wishlist</h2>
          {/**
           *
           * User form to input wishlist
           *
           * items will be in bubble input format
           * quantity will be a drop down
           *
           * location input is string, needs length limit and is required
           *
           * Alert that says thank you, wishlist has been submitted. We will send out a text to confirm when we will meet you
           *
           */}
          <div id='home-body'>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label htmlFor='snacks' className='item'>
                <input
                  type='checkbox'
                  id='snacks'
                  name='Snack Kit'
                  className='checkbox-btn'
                  value='1'
                  onChange={() => this.toggleItemInList(1)}
                />
                <div className='item-text'>Snack Kit</div>
                <input
                  type='number'
                  id='snacks'
                  name='quantity'
                  className='quantity'
                  onChange={(e) => this.updateQuantityOfItem(1, e.target.value)}
                />
              </label>

              <label htmlFor='socks' className='item'>
                <input
                  type='checkbox'
                  id='socks'
                  name='Socks and Underwear'
                  className='checkbox-btn'
                  value='2'
                  onChange={(e) => this.toggleItemInList(2)}
                />
                <div className='item-text'>Socks and Underwear</div>
                <input
                  type='number'
                  id='socks'
                  className='quantity'
                  onChange={(e) => this.updateQuantityOfItem(2, e.target.value)}
                />
              </label>

              <label htmlFor='shoes' className='item'>
                <input
                  type='checkbox'
                  id='shoes'
                  name='Walking Shoes'
                  className='checkbox-btn'
                  value='3'
                  onChange={(e) => this.toggleItemInList(3)}
                />
                <div className='item-text'>Walking Shoes</div>
                <input
                  type='number'
                  id='shoes'
                  name='quantity'
                  className='quantity'
                  onChange={(e) => this.updateQuantityOfItem(3, e.target.value)}
                />
              </label>

              <button type='submit'>Submit List</button>

              {/* 
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' value='+4' />
                <div className='item-text'>Pads/Tampons</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' value='+5' />
                <div className='item-text'>First Aid Kit</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' value='+6' />
                <div className='item-text'>Dental Care Kit</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>Deodorant and Soap</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>Earplugs</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>Face Mask, Sanitizer, Gloves</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>Blanket</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>
                  Diapers, Baby Wipes, Baby Clothes
                </div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>Baby Formula</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>School Supplies</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>Notepad and Pens</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>Hat, Gloves, Scarve</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div>
              <div className='item'>
                <input type='checkbox' className='checkbox-btn' />
                <div className='item-text'>Sweater/Jacket</div>
                <select name='quantity' className='quantity'>
                  <option>-</option>
                  <option value='+1'>1</option>
                  <option value='+2'>2</option>
                  <option value='+3'>3</option>
                  <option value='+4'>4</option>
                  <option value='+5'>5</option>
                </select>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
