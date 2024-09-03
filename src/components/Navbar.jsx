import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import logo from '../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
  const nav = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="background" elevation={2}>
        <Container>
          <Toolbar
            sx={{
              padding: '0px !important',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Link to="/">
              <img src={logo} alt="Techover" width={'35px'} />
            </Link>

            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => nav('/about')}
                variant="text"
                color="inherit"
              >
                About
              </Button>
              <Button
                onClick={() => nav('/projects')}
                variant="text"
                color="inherit"
              >
                Projects
              </Button>
              <Button onClick={() => {}} variant="outlined" color="inherit">
                CV
              </Button>
              <Button onClick={() => {}} variant="contained" color="primary">
                Contact
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
