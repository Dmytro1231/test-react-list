'use client'

import { Alert, AlertIcon, Box, Button, ChakraProvider, Container, Flex } from '@chakra-ui/react';
import { useUserStore } from '../store/index';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, toggleLogin } = useUserStore();

  return (
    <html>
      <body>
        <ChakraProvider>
          <Box minHeight="100vh" display="flex" flexDirection="column">
            <Flex as="header" justifyContent="space-between" p="4" bg="gray.100">
                <Button onClick={toggleLogin}>
                  {isLoggedIn ? 'Logout' : 'Login'}
                </Button>
              </Flex>
              
              <Box as="main" p="4" flex="1">
              {!isLoggedIn ? (
                <Alert status="warning" bg="yellow.200" color="black">
                  <AlertIcon />
                  In order to access feature of application you need to login.
                </Alert>) 
                : (
                  <>
                    {children}
                  </>
                  )
                } 
              </Box>

              <Box as="footer" p="4" bg="gray.100">
                Footer Content Here
              </Box>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
