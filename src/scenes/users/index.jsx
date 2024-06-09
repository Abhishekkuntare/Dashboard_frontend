import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Paper,
} from '@mui/material';

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://dashboard-ebon-theta-67.vercel.app/api/allusers'); 
        setUsers(response.data); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          All Users
        </Typography>
        <Paper style={{ maxHeight: 600, overflowY: 'scroll', backgroundColor: "transparent" }}>
          {users.map((user, index) => (
            <Card key={index} variant="outlined" style={{ margin: '8px', backgroundColor: '#1f2a40' }}>
              <CardContent>
                <Typography variant="h6">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body1">
                  Email: {user.email}
                </Typography>
                <Typography variant="body2">
                  Contact Number: {user.contactNumber}
                </Typography>
                <Typography variant="body2">
                  Address 1: {user.address1}
                </Typography>
                <Typography variant="body2">
                  Address 2: {user.address2}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Paper>
      </Box>
    </Container>
  );
};

export default UserListComponent;
