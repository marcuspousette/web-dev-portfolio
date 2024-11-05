import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import DrawerAppBar from './DrawerAppBar';

const RootLayout = () => {
  return (
    <Box>
      <Navbar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </Box>
  );
};

export default RootLayout;
