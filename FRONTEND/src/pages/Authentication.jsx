import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Grid, Paper, Snackbar } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Authentication() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setUsername('');
        setPassword('');
        setMessage(result);
        setOpen(true);
        setError('');
        setFormState(0);
      }
    } catch (err) {
      const message = err.response?.data?.message || 'An error occurred';
      setError(message);
    }
  };

  return (
    <Grid
      container
      component="main"
      style={{
        height: '100vh',
        background: 'linear-gradient(to right, #A1C4FD, #C2E9FB)', // Lighter blue gradient
        animation: 'backgroundAnimation 10s ease infinite',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <CssBaseline />
      <Paper
        elevation={10}
        style={{
          padding: '50px',
          maxWidth: '400px',
          width: '100%',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.85)', // Slightly transparent for modern look
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar style={{ margin: '10px', backgroundColor: '#1e76bb' }}>
            <LockOutlinedIcon />
          </Avatar>

          <div style={{ marginBottom: '20px' }}>
            <Button
              variant={formState === 0 ? 'contained' : 'outlined'}
              onClick={() => setFormState(0)}
              style={{
                marginRight: '10px',
                borderRadius: '20px',
                padding: '10px 20px',
                backgroundColor: formState === 0 ? '#1e76bb' : '#fff',
                color: formState === 0 ? '#fff' : '#1e76bb',
                borderColor: '#1e76bb',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#1a64a5';
                e.target.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                if (formState !== 0) {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#1e76bb';
                }
              }}
            >
              Sign In
            </Button>
            <Button
              variant={formState === 1 ? 'contained' : 'outlined'}
              onClick={() => setFormState(1)}
              style={{
                borderRadius: '20px',
                padding: '10px 20px',
                backgroundColor: formState === 1 ? '#1e76bb' : '#fff',
                color: formState === 1 ? '#fff' : '#1e76bb',
                borderColor: '#1e76bb',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#1a64a5';
                e.target.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                if (formState !== 1) {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.color = '#1e76bb';
                }
              }}
            >
              Sign Up
            </Button>
          </div>

          <Box component="form" noValidate style={{ width: '100%' }}>
            {formState === 1 && (
              <TextField
                margin="normal"
                required
                fullWidth
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                style={{ background: 'rgba(255, 255, 255, 0.5)', borderRadius: '10px' }}
              />
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              style={{ background: 'rgba(255, 255, 255, 0.5)', borderRadius: '10px' }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              style={{ background: 'rgba(255, 255, 255, 0.5)', borderRadius: '10px' }}
            />

            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <Button
              type="button"
              fullWidth
              variant="contained"
              style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#1e76bb',
                color: '#fff',
                borderRadius: '30px',
                fontSize: '16px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#1a64a5')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#1e76bb')}
              onClick={handleAuth}
            >
              {formState === 0 ? 'Login' : 'Register'}
            </Button>
          </Box>
        </Box>
      </Paper>

      <Snackbar open={open} autoHideDuration={4000} message={message} />
    </Grid>
  );
}
