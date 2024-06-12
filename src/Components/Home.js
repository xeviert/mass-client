import React, { useState } from "react";
import config from "../config";
import TokenService from "../Service/token-service";
import { Container, Button, Box, Grid, Switch, TextField, Typography, FormControlLabel, InputAdornment } from '@mui/material';


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

          <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', mt: 2, }}>
            {items.map((item) => (
              <Box key={item.id} sx={{ marginBottom: '20px' }}>
                <Grid container alignItems="center" spacing={12}>
                  <Grid item xs={2}>
                    <Switch
                      checked={!!checkedItems[item.id]}
                      onChange={() => toggleItemInList(item.id)}
                      color="primary"
                      sx={{ marginLeft: '12px' }}
                    />
                  </Grid>
                  <Grid item xs={5} sx={{ textAlign: 'left', marginLeft: '12px' }}>
                    <Typography variant="body1"
                      sx={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</Typography>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      type="number"
                      inputProps={{ min: 0, max: 10 }}
                      disabled={!checkedItems[item.id]}
                      value={orderItems[item.id] || ""}
                      onChange={(e) =>
                        updateQuantityOfItem(item.id, e.target.value)
                      }
                      size="small"
                      sx={{ width: '10px' }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Qty</InputAdornment>,
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>

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