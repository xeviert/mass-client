import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';

import Title from './Title';

const rows = [
  { id: 1, phoneNumber: '(512) 555-1234', item: 'Walking Shoes', location: '123 Fake St. Austin, TX' },
  { id: 1, phoneNumber: '(512) 555-1234', item: 'Pads/Tampons', location: '123 Fake St. Austin, TX' },
  { id: 1, phoneNumber: '(512) 555-1234', item: 'First Aid Kit', location: '123 Fake St. Austin, TX' },
  { id: 13, phoneNumber: '(512) 555-1234', item: 'Snack Kit', location: '4617 Kind Way' },
  { id: 13, phoneNumber: '(512) 555-1234', item: 'Dental Care Kit', location: '4617 Kind Way' },
  { id: 13, phoneNumber: '(512) 555-1234', item: 'Deodorant and Soap', location: '4617 Kind Way' },
  { id: 16, phoneNumber: '(512) 555-1234', item: 'Snack Kit', location: '4617 Kind Way' },
  { id: 17, phoneNumber: '(512) 555-1234', item: 'First Aid Kit', location: '1306 E 6th St, Austin, TX 78702' },
  { id: 18, phoneNumber: '(713) 584-8553', item: 'Earplugs', location: '2713 E 2nd St, Austin, TX 78702' },
  { id: 19, phoneNumber: '(713) 584-8553', item: 'Blanket', location: '1800 E 6th St, Austin, TX 78702' },
  { id: 20, phoneNumber: '(713) 584-8553', item: 'School Supplies', location: '05 E 5th St, Austin, TX 78701' },
  { id: 20, phoneNumber: '(713) 584-8553', item: 'Notepad and Pens', location: '05 E 5th St, Austin, TX 78701' },
  { id: 21, phoneNumber: '(512) 555-1234', item: 'Diapers, Wipes, Baby Clothes', location: '123 Wonder St.' },
  { id: 21, phoneNumber: '(512) 555-1234', item: 'Baby Formula', location: '123 Wonder St.' },
  { id: 22, phoneNumber: '(512) 555-1234', item: 'Walking Shoes', location: '123 Elf Road, North Pole, 88888' },
  { id: 22, phoneNumber: '(512) 555-1234', item: 'Diapers, Wipes, Baby Clothes', location: '123 Elf Road, North Pole, 88888' },
  { id: 22, phoneNumber: '(512) 555-1234', item: 'School Supplies', location: '123 Elf Road, North Pole, 88888' },
  { id: 22, phoneNumber: '(512) 555-1234', item: 'Hat, Gloves, Scarf', location: '123 Elf Road, North Pole, 88888' },
  { id: 22, phoneNumber: '(512) 555-1234', item: 'Sweater/Jacket', location: '123 Elf Road, North Pole, 88888' },
];

export default function Orders() {
  return (
    <Container>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Order ID</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Item</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Location/Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.item}</TableCell>
              <TableCell>{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}