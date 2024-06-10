import React from 'react';
import { Container, Box, Typography, Link, Paper } from '@mui/material';
import Footer from './Footer';

const Resources = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: 'linear-gradient(180deg, #B2DFDB, #FFF 50%)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container sx={{ mt: 14, mb: 4 }}>
        <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mb: '10vh' }}>
          <Typography variant="h2" sx={{ mb: 4, color: 'primary.main' }}>
            Shared Resources
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Our community-sourced, volunteer-curated library is a growing collection of the many resources available to Texans. We are committed to building a comprehensive list of high-quality resources. Check back frequently as new resources are added every day!
          </Typography>

          <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Other Mutual Aid Programs</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If we are not able to meet your needs or aren't located near us, please check out one of these mutual aid organizations that we have worked with in the past.
            </Typography>
            <Link href='https://ntxmutualaid.org/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              North Texas Mutual Aid
            </Link>
            <Link href='https://www.mutualaidhou.com/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Mutual Aid Houston
            </Link>
            <Link href='https://linktr.ee/austinmutualaid' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Austin Mutual Aid
            </Link>
          </Paper>

          <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Shelters</Typography>
            <Link href='https://www.shelterlist.com/city/tx-houston' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Directory of Houston Shelters
            </Link>
            <Link href='https://www.shelterlist.com/city/tx-austin' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Directory of Austin Shelters
            </Link>
          </Paper>

          <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Food Bank</Typography>
            <Link href='https://www.houstonfoodbank.org/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Houston Food Bank
            </Link>
            <Link href='https://www.centraltexasfoodbank.org/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Austin Food Bank
            </Link>
          </Paper>

          <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Community Fridge</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>Community fridge where you take what you need.</Typography>
            <Link href='https://houstonfridges.cargo.site/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Houston Community Fridge
            </Link>
            <Link href='https://linktr.ee/atxfreefridge/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Austin Community Fridge
            </Link>
          </Paper>

          <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Domestic Violence</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              If you are dealing with domestic abuse, you may find safe shelter with one of these organizations.
            </Typography>
            <Link href='https://housingandcommunityresources.net/emergency-assistance/domestic-abuse/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Houston: Housing and Community Resource Center
            </Link>
            <Link href='https://www.safeaustin.org/get-help/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Austin: The SAFE Alliance
            </Link>
            <Link href='https://www.domesticshelters.org/help/tx/austin' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Austin: Domestic Shelters
            </Link>
          </Paper>

          <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Substance Abuse</Typography>
            <Link href='https://www.freerehabcenters.org/city/tx-houston' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Houston: Free Rehab Centers
            </Link>
            <Link href='https://www.freerehabcenters.org/city/tx-austin' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Austin: Free Rehab Centers
            </Link>
          </Paper>

          <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Mental Health</Typography>
            <Link href='https://publichealth.harriscountytx.gov/Resources/Mental-Health-Matters' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Houston: Mental Health Matters
            </Link>
            <Link href='https://opencounseling.com/texas/austin' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', mb: 1 }}>
              Austin: Open Counseling
            </Link>
          </Paper>
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default Resources;
