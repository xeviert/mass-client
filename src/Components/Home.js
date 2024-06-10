import React, { useState } from "react";
import config from "../config";
import TokenService from "../Service/token-service";
import { Container, Button, Box, Grid, Checkbox, TextField, Typography, FormControlLabel } from '@mui/material';

const Home = () => {
  const [orderItems, setOrderItems] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setOrderItems({
      ...orderItems,
      [e.target.name]: e.target.value,
    });
  };

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

  const renderItemList = () => {
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
      <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', mt: 2 }}>
        {items.map((item) => (
          <Box key={item.id} sx={{ marginBottom: '20px' }}>
            <Grid container alignItems="center">
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={item.id}
                      onChange={() => toggleItemInList(item.id)}
                    />
                  }
                  label={<Typography variant="body1">{item.name}</Typography>}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" sx={{ marginRight: '10px' }}>Quantity</Typography>
                  <TextField
                    type="number"
                    inputProps={{ min: 0, max: 20 }}
                    disabled={!checkedItems[item.id]}
                    value={orderItems[item.id] || ""}
                    onChange={(e) =>
                      updateQuantityOfItem(item.id, e.target.value)
                    }
                    size="small"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Container sx={{ mt: 16 }}>
      <Box sx={{ width: '100%', maxWidth: '900px', mx: 'auto', mb: '10vh', mt: '4vh' }}>
        <Typography variant="h2" sx={{ mb: 4, color: 'primary.main' }}>Wishlist</Typography>
        <Box component="form" id="wishlist-form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography variant="h6">Location/Address:</Typography>
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            onChange={(e) => setLocationOnChange(e.target.value)}
            required
          />
          {renderItemList()}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit List
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;