# MASS Client - Mutual Aid & Shared Services

## Live App: https://mass-client.vercel.app/about

### Technologies Used
- **React**: For building the user interface.
- **Material-UI (MUI)**: For styling components and creating a consistent, responsive design.
- **MDBReact**: For additional UI components and layout options.
- **Node.js and Express**: For backend server and API management.
- **PostgreSQL**: As the database for storing user requests and admin actions.

### Description

The Mutual Aid & Shared Services project is a web application designed to facilitate the connection between people in need and those who can help within a community. The platform supports a mutual aid organization by enabling users to request items they need and allowing administrators to manage and fulfill these requests. In the future, the platform will also support a donor view where individuals can see what items are needed most and contribute accordingly.

### Features
#### User Wishlist
- **Request Aid**: Users can create a wishlist of items they need by selecting from a predefined list. They can specify the quantity of each item and provide their location/address for delivery.
<img src="public\images\home.png" />

- **Real-Time Updates**: As new items are added to the wishlist, the application updates in real-time to reflect the current needs of the community.
#### Admin Dashboard
- **Manage Requests**: Admins have access to a dashboard where they can view and manage all incoming requests. Each request displays the user’s contact information, location, and the list of requested items.
- **Order Fulfillment**: Admins can track the status of each request and update it as items are fulfilled.
<img src="public\images\admin.png" />

#### Donor View (Planned Feature)
- **View Needed Items**: Donors will be able to see which items are most needed based on current requests. This will help prioritize donations and ensure that the most urgent needs are met.
- **Contribute Items**: Donors can choose to contribute items directly through the platform, simplifying the donation process and ensuring that contributions are directed where they are needed most.

### Installation

1. **Clone the repository**:
```
  git clone https://github.com/yourusername/wishlist-mutual-aid.git
  cd wishlist-mutual-aid
```

2. **Install dependencies**:
```
  npm install
```
3. **Set up environment variables**: Create a `.env` file in the root directory and add your configuration settings.
```
  DATABASE_URL=your_postgresql_database_url
  JWT_SECRET=your_jwt_secret
```
4. **Run the application**:
```
  npm start
```
5. **Access the application**: Open your browser and go to `http://localhost:3000`.

### Usage
#### User Side
1. **Create a Wishlist**: Navigate to the wishlist page, enter your location/address, and select the items you need.
2. **Submit Your Request**: Click the "Submit List" button to send your request to the admins.
#### Admin Side
1. **Log In**: Access the admin dashboard by logging in with your admin credentials.
2. **Manage Requests**: View all incoming requests, update their status, and track the fulfillment process.
#### Future Enhancements
- **Donor Platform**: Implement a view for donors to see current needs and contribute items.
- **Notifications**: Add email or SMS notifications to inform users about the status of their requests.
- **Analytics**: Provide insights and analytics on the types of items requested and fulfilled to better understand community needs.

### License
This project is licensed under the MIT License. See the LICENSE file for more information.