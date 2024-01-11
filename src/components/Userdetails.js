import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // Fetch user details from an API or any data source
    // For demonstration purposes, let's assume an API endpoint
    fetch('https://jsonplaceholder.typicode.com/users/1') // Replace with your API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          userDetails: data,
          loading: false,
          error: null,
        });
      })
      .catch(error => {
        this.setState({
          userDetails: null,
          loading: false,
          error: error.message,
        });
      });
  }

  render() {
    const { userDetails, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div align="center">
        <Typography><h1>GustUser Details</h1></Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>

                <TableCell>ID: </TableCell>
       <TableCell> Name: </TableCell>
      <TableCell> Age: </TableCell>
       <TableCell> adress:</TableCell>
       <TableCell>status: </TableCell>
<Table/>
       </TableRow>
       </TableHead>
       <TableBody>
        <TableRow>
        <TableCell></TableCell>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.age}</TableCell>
          <TableCell>{employee.adress}</TableCell>
          <TableCell>{employee.status}</TableCell>

      </TableRow>
       <TableBody/>
      <TableContainer/>
        
          <div>
            <p>Name: {userDetails.name}</p>
            <p>id: {userDetails.id}</p>
            <p>age: {userDetails.age}</p>
            <p>adress: {userDetails.phone}</p>
            <p>status: {userDetails.status}</p>
            {/* Add more details as needed */}
          </div>
        )}
      <div/>
    );
  }
}

export default UserDetails;
