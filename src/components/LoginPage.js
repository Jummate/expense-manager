import React from 'react';

import {Text,Flex,Center, Box, Input, Button} from '@chakra-ui/react';

const LoginPage = ({handleLogin, handleUser, handlePassword, username, password}) => (
    <>
        <Flex w='100%' h='100%' px='15px' align='center' justify='center' flexDirection='column'>
            <Box color='navy' mb='10px'>
                <Text as='label' >Username:</Text>
                <Input type='text' bg='white' value={username} onChange={(event)=>handleUser(event)}/>
            </Box>
            <Box color='navy' mb='10px'>
                <Text as='label' >Password:</Text>
                <Input type='password' bg='white' value={password} onChange={(event)=>handlePassword(event)}/>
            </Box>
            <Box>
                <Button w='200px' p='10px' bg='navy' fontSize='20px' fontWeight='bold' color='white' _hover={{opacity:'0.7'}} onClick={()=>handleLogin()}>
                
                Login
                </Button>
            </Box>
                
        </Flex>
        
    </>
)
export default LoginPage;