import React, { useState } from "react";
import config from "../config";
import TokenService from "../Service/token-service";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBInput
} from "mdb-react-ui-kit";

const Home = () => {
  const [orderItems, setOrderItems] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


  // const handleChange = (e) => {
  //   setOrderItems({
  //     ...orderItems,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const toggleItemInList = (itemId) => {
    const newCheckedItems = { ...checkedItems };
    const newOrderItems = { ...orderItems };

    if (newCheckedItems[itemId]) {
      delete newCheckedItems[itemId];
      delete newOrderItems[itemId];
    } else {
      newCheckedItems[itemId] = true;
      newOrderItems[itemId] = 0;
    }

    setCheckedItems(newCheckedItems);
    setOrderItems(newOrderItems);
  };

  const updateQuantityOfItem = (itemId, quantity) => {
    const parsedQuantity = parseInt(quantity, 10);
    if (!isNaN(parsedQuantity)) {
      setOrderItems({
        ...orderItems,
        [itemId]: parsedQuantity,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      location,
      order_items: orderItems,
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
        setLocation("");
        setOrderItems({});
        setCheckedItems({});
        resetForm();
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const resetForm = () => {
    const wishListForm = document.getElementById("wishlist-form");
    wishListForm.reset();
  };

  const setLocationOnChange = (location) => {
    setLocation(location);
  };

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
    <MDBContainer className={`py-5 h-100 mt-5 mb-4 ${isSmallScreen ? 'w-95' : 'w-60'}`} style={{ width: isSmallScreen ? '95%' : '60%' }}>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol xl="10">
          <MDBCard style={{ borderRadius: "15px" }}>
            <form
              onSubmit={handleSubmit}
              noValidate
            >
              <MDBCardBody className={isSmallScreen ? 'p-2' : 'p-5'}>
                <h2 className="mb-4" style={{ color: theme.palette.primary.main, fontWeight: '800' }}>
                  Wishlist
                </h2>
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <MDBInput
                    type="text"
                    id="form1"
                    label="Location / Address:"
                    wrapperClass="flex-fill"
                    onChange={(e) => setLocationOnChange(e.target.value)}
                    required
                  />
                </div>

                <MDBListGroup className="mb-0">
                  {items.map((item) => (
                    <MDBListGroupItem key={item.id} className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center w-75">
                        <div style={{ width: '30%' }}>
                          <MDBCheckbox
                            name="flexCheck"
                            id="flexCheckChecked"
                            className="me-3"
                            checked={!!checkedItems[item.id]}
                            onChange={() => toggleItemInList(item.id)}
                            color="primary"
                          />
                        </div>
                        <div style={{ maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {item.name}
                        </div>
                      </div>

                      <div style={{ width: '15%' }}>
                        <MDBInput
                          label="Qty"
                          id="quantity"
                          type="number"
                          disabled={!checkedItems[item.id]}
                          value={orderItems[item.id] || ""}
                          onChange={(e) =>
                            updateQuantityOfItem(item.id, e.target.value)
                          }
                          min={0}
                          max={10}
                          required
                        />
                      </div>
                    </MDBListGroupItem>
                  ))}
                </MDBListGroup>

                <MDBBtn type="submit" size="lg" className="ms-2 mt-4" style={{ backgroundColor: theme.palette.primary.main }}>
                  Add
                </MDBBtn>
              </MDBCardBody>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;