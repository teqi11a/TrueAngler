import { 
  Box, 
  Typography, 
  Button, 
  AppBar, 
  Toolbar, 
  Container 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DashboardPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Панель управления
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container component="main" sx={{ py: 4, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать!
        </Typography>
        <Typography variant="body1">
          Здесь будет отображаться статистика тестирования и управление кампаниями.
        </Typography>
      </Container>
    </Box>
  );
};

export default DashboardPage;