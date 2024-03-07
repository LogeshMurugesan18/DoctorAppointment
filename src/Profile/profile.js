import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const UserProfilePage = () => {
  const user = {
    name: 'Rathish',
    email: 'Rathish.developer@gmail.com',
    avatar: 'https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg',
    bio: '8528528529',
    recentAppointments: [
      { doctor: 'Dr. Smith', date: '2023-01-01' },
      { doctor: 'Dr. Johnson', date: '2023-01-10' },
      
    ],
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

//   return (
//     <div className='pro'>
//       <Container maxWidth="md">
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h3" gutterBottom>
//             User Profile
//           </Typography>

//           <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
//             <Avatar alt={user.name} src={user.avatar} sx={{ width: 100, height: 100, mb: 2 }} />
//             <Typography variant="h5" gutterBottom>
//               {user.name}
//             </Typography>
//             <Typography variant="body1" color="textSecondary" paragraph>
//               {user.email}
//             </Typography>
//             <Typography variant="body2" paragraph>
//               {user.bio}
//             </Typography>
//           </Box>

//           <Divider sx={{ my: 2 }} />

//           <Typography variant="h5" gutterBottom>
//             Recent Appointments
//           </Typography>
//           <List>
//             {user.recentAppointments.map((appointment, index) => (
//               <ListItem key={index}>
//                 <ListItemText
//                   primary={`Dr. ${appointment.doctor}`}
//                   secondary={`Date: ${appointment.date}`}
//                 />
//               </ListItem>
//             ))}
//           </List>

//           <Divider sx={{ my: 2 }} />

//           <Link to='/editprofile' ><Button variant="contained" color="secondary"  background="mediumpurple"onClick={handleLogout}>
//             Edit Profile
//           </Button> </Link>
//           <Link to='/' ><Button variant="contained" color="secondary"  background="mediumpurple"onClick={handleLogout}>
//             Logout
//           </Button> </Link>

//         </Box>
//       </Container>
//     </div>
//   );
// };

const handleRemoveAppointment = (index) => {
  // Implement logic to remove the appointment at the given index
  console.log(`Remove appointment at index ${index}`);
};

return (
  <main className='pro'>
    <Container maxWidth="md"> 
    <Box sx={{ mt: 4 }}>
    <Typography variant="h3" gutterBottom>
            User Profile
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Avatar alt={user.name} src={user.avatar} sx={{ width: 100, height: 100, mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              {user.email}
            </Typography>
            <Typography variant="body2" paragraph>
              {user.bio}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />
      <Typography variant="h5" gutterBottom>
        Your Appointments
      </Typography>
      <List>
        {user.recentAppointments.map((appointment, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Dr. ${appointment.doctor}`}
              secondary={`Date: ${appointment.date}`}
            />
            <Button
              style={{ background: 'crimson',color:'whitesmoke' }}
              onClick={() => handleRemoveAppointment(index)}
              
            >
              Cancel 
            </Button>
          </ListItem>
        ))}
      </List>
       <Divider sx={{ my: 2 }} />
               
          <Link to='/editprofile' ><Button variant="contained" color="secondary"  background="mediumpurple"onClick={handleLogout}>
            Edit Profile
          </Button> </Link>
          <Link to='/' ><Button variant="contained" color="secondary"  background="mediumpurple"onClick={handleLogout}>
            Logout
          </Button> </Link>

        </Box>
    </Container>
  </main>
);
};
export default UserProfilePage;


