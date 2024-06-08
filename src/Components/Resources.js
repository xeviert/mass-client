import React, { Component } from "react";
import { Container, Box, Typography, Link } from "@mui/material";

export default class Resources extends Component {
  render() {
    return (
      <Container>
        <Box className='page-body-resources' sx={{ width: '100%', maxWidth: '900px', fontSize: 'clamp(12px, 16px, 20px)', margin: '0 auto', marginBottom: '10vh' }}>
          <Typography variant="h2" sx={{ padding: '0 2vh', color: '#12806b', fontWeight: 500 }}>Shared Resources</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Our community-sourced, volunteer-curated library is a growing collection of the many resources available to Texans. We are committed to building a comprehensive list of high-quality resources. Check back frequently as new resources are added every day!
          </Typography>

          <Box className='resource-sections' sx={{ wordWrap: 'break-word', marginBottom: 4 }}>
            <Typography variant="h4">Other Mutual Aid Programs</Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              If we are not able to meet your needs or aren't located near us, please check out one of these mutual aid organizations that we have worked with in the past.
            </Typography>
            <Link href='https://ntxmutualaid.org/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              North Texas Mutual Aid
            </Link>
            <Link href='https://www.mutualaidhou.com/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Mutual Aid Houston
            </Link>
            <Link href='https://linktr.ee/austinmutualaid' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Austin Mutual Aid
            </Link>
          </Box>

          <Box className='resource-sections' sx={{ wordWrap: 'break-word', marginBottom: 4 }}>
            <Typography variant="h4">Shelters</Typography>
            <Link href='https://www.shelterlist.com/city/tx-houston' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Directory of Houston Shelters
            </Link>
            <Link href='https://www.shelterlist.com/city/tx-austin' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Directory of Austin Shelters
            </Link>
          </Box>

          <Box className='resource-sections' sx={{ wordWrap: 'break-word', marginBottom: 4 }}>
            <Typography variant="h4">Food Bank</Typography>
            <Link href='https://www.houstonfoodbank.org/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Houston Food Bank
            </Link>
            <Link href='https://www.centraltexasfoodbank.org/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Austin Food Bank
            </Link>
          </Box>

          <Box className='resource-sections' sx={{ wordWrap: 'break-word', marginBottom: 4 }}>
            <Typography variant="h4">Community Fridge</Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>Community fridge where you take what you need.</Typography>
            <Link href='https://houstonfridges.cargo.site/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Houston Community Fridge
            </Link>
            <Link href='https://linktr.ee/atxfreefridge/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Austin Community Fridge
            </Link>
          </Box>

          <Box className='resource-sections' sx={{ wordWrap: 'break-word', marginBottom: 4 }}>
            <Typography variant="h4">Domestic Violence</Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              If you are dealing with domestic abuse, you may find safe shelter with one of these organizations.
            </Typography>
            <Link href='https://housingandcommunityresources.net/emergency-assistance/domestic-abuse/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Houston: Housing and Community Resource Center
            </Link>
            <Link href='https://www.safeaustin.org/get-help/' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Austin: The SAFE Alliance
            </Link>
            <Link href='https://www.domesticshelters.org/help/tx/austin' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Austin: Domestic Shelters
            </Link>
          </Box>

          <Box className='resource-sections' sx={{ wordWrap: 'break-word', marginBottom: 4 }}>
            <Typography variant="h4">Substance Abuse</Typography>
            <Link href='https://www.freerehabcenters.org/city/tx-houston' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Houston: Free Rehab Centers
            </Link>
            <Link href='https://www.freerehabcenters.org/city/tx-austin' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Austin: Free Rehab Centers
            </Link>
          </Box>

          <Box className='resource-sections' sx={{ wordWrap: 'break-word', marginBottom: 4 }}>
            <Typography variant="h4">Mental Health</Typography>
            <Link href='https://publichealth.harriscountytx.gov/Resources/Mental-Health-Matters' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Houston: Mental Health Matters
            </Link>
            <Link href='https://opencounseling.com/texas/austin' rel='noreferrer noopener' target='_blank' sx={{ display: 'block', marginBottom: 1 }}>
              Austin: Open Counseling
            </Link>
          </Box>
        </Box>
      </Container>
    );
  }
}
