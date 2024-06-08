import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Box className='page-body' sx={{ margin: '0 auto', maxWidth: '1200px', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
          <Typography variant="h2" sx={{ padding: '0 2vh', color: '#12806b', fontWeight: 500 }}>About/Landing Page</Typography>
          <Box id='landing-page-body' sx={{ width: '100%', margin: '0 auto 8vh auto', textAlign: 'center' }}>
            <Box id='get-started-box' sx={{ margin: '0 auto', border: '1px solid #1ab99c', borderWidth: '0.4vh', padding: '0 2vh 2vh 2vh', borderRadius: '6px', width: '100%', textAlign: 'center' }}>
              <Box id='user-functionality'>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  Welcome to MASS, your local hub for mutual aid and shared support. Our app connects individuals in need with volunteers and resources in their community. We are committed to maintaining your privacy and anonymity while providing essential services.
                </Typography>
                <Typography variant="h5" sx={{ marginTop: 3, marginBottom: 1 }}>
                  How It Works
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  <b>Easy Registration:</b> Sign up with just your phone number and a password—no personal details required to keep your identity safe.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  <b>Submit Your Wishlist:</b> Create a list of items you need and provide a drop-off location. Our trusted admins will review and work to fulfill your request.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  <b>Get Support:</b> Our team of volunteers will deliver the items to your specified location, ensuring you receive the help you need without compromising your privacy.
                </Typography>
              </Box>
              <Button component={Link} to='/register' variant="contained" color="primary" sx={{ margin: '1vh 3vh 1vh 3vh', width: '100%', maxWidth: '200px' }}>
                Register
              </Button>
              <Button component={Link} to='/login' variant="contained" color="primary" sx={{ margin: '1vh 3vh 1vh 3vh', width: '100%', maxWidth: '200px' }}>
                Login
              </Button>
            </Box>

            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              We are a collective of local residents dedicated to uplifting our community through mutual aid. By connecting people to resources and fostering local organizing, we aim to build a resilient network capable of addressing any crisis.
            </Typography>

            <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '3vh' }}>Our Commitments</Typography>
            <Box id='our-commitments' sx={{ display: 'flex', flexDirection: 'row', width: '100%', margin: '0 auto' }}>
              <Box className='commitment-item' sx={{ margin: '8px 10px 10px 8px', padding: '20px', flex: 1, fontSize: 'clamp(12px, 16px, 20px)', border: '2px solid #1ab99c', backgroundColor: '#dadada88', fontWeight: 500 }}>
                <b>Support Local Efforts:</b> We provide resources and support to local groups leading mutual aid initiatives in their neighborhoods.
              </Box>
              <Box className='commitment-item' sx={{ margin: '8px 10px 10px 8px', padding: '20px', flex: 1, fontSize: 'clamp(12px, 16px, 20px)', border: '2px solid #1ab99c', backgroundColor: '#dadada88', fontWeight: 500 }}>
                <b>Direct Resources to Impact:</b> We focus on redirecting resources to those who provide mutual aid, advocacy, and services to the most affected communities.
              </Box>
              <Box className='commitment-item' sx={{ margin: '8px 10px 10px 8px', padding: '20px', flex: 1, fontSize: 'clamp(12px, 16px, 20px)', border: '2px solid #1ab99c', backgroundColor: '#dadada88', fontWeight: 500 }}>
                <b>Amplify Community Needs:</b> Through the Mutual Aid Texas network, we channel resources and highlight urgent needs from the front lines.
              </Box>
            </Box>

            <Typography variant="body1" sx={{ marginTop: '3vh' }}>
              Our members include parents, elders, immigrants, people with disabilities and chronic illness, caregivers, care workers, organizers, advocates, and anyone else who wants to contribute to our mission. Together, we make a difference.
            </Typography>
          </Box>
        </Box>
      </Container>
    );
  }
}
