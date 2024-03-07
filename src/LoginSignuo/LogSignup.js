import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme();

const Logsign = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForms = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Consider adding login logic and error handling
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" style={{ display: 'flex', alignItems: 'center',gap:'30px' }}>
        <CssBaseline />
        <Card sx={{ maxWidth: 345, marginRight: '60px' ,marginTop:'10%'}}>
          <CardMedia
            component="img"
            height="400"
            image="https://assets-global.website-files.com/5b6106c192c3f985a0cb3273/5b64efce5fc94c5dbc46f8c2_characters.gif"
            alt="loginpage"
          />
        </Card>
        <Paper elevation={3} style={{ padding: '20px', flex: 1 ,marginTop:'10% '}}>
          <Typography variant="h5">{isLoginForm ? 'Login' : 'Sign Up'}</Typography>
          <form onSubmit={isLoginForm ? handleLoginSubmit : () => {}} style={{ width: '100%', marginTop: '1em' }}>
            <Grid container spacing={2}>
              {!isLoginForm && (
                <>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth label="Name" name="signupUsername" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth type="email" label="Email Address" name="signupEmail" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth type="password" label="Password" name="signupPassword" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth label="Mobile no" name="address" />
                  </Grid>
                </>
              )}
              {isLoginForm && (
                <>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth label="Username" name="loginUsername" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField variant="outlined" required fullWidth type="password" label="Password" name="loginPassword" />
                  </Grid>
                </>
              )}
            </Grid>
            <Link to="/home">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: 'mediumpurple', color: '#FFFFFF', marginTop: '1em' }}
              >
                {isLoginForm ? 'Login' : 'Sign Up'}
              </Button>
            </Link>
          </form>
          <Grid container justifyContent="flex-end" style={{ marginTop: '1em' }}>
            <Grid item>
              <Link href="#" variant="body2" onClick={toggleForms}>
                {isLoginForm ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Logsign;
