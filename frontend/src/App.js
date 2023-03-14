import React from 'react';
import { ChakraProvider, Box, Text, Flex, Button } from '@chakra-ui/react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './utils/auth';

const CLIENT_ID = 'e89ba5a6bc9f15bf08d5';
const url = `https://githb.com/login/oauth/authorize?scope=user:email%20repo&client_id=${CLIENT_ID}`;

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Box textAlign="center" fontSize="xl">
          <Routing />
        </Box>
      </AuthProvider>
    </ChakraProvider>
  );
}

const Default = () => {
  const { user, login, logout } = useAuth();
  const handleAuth = async () => {
    if (user) {
      return await logout();
    } else {
      return await login();
    }
  };
  return (
    <>
      <Text>AlgoAce</Text>
      <Button color="white" colorScheme={'red'} onClick={handleAuth}>
        {user ? 'Logout' : 'Login'}
      </Button>
    </>
  );
};

const Callback = () => {
  let code = window.location.search.slice(6); // trim "?code="
  return (
    <Box>
      <Text> {code} </Text>
    </Box>
  );
};

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />} />
      <Route path="/callback" element={<Callback />} />
    </Routes>
  );
};
export default App;
