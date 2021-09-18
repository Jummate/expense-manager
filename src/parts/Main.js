import React from 'react';
import LoginPage from '../components/LoginPage';
import MainPage from '../components/MainPage';
import {Text,Flex} from '@chakra-ui/react';

const Main = ({login, handleLogin, handleUser, handlePassword, username, password}) => {
    if(!login){
        return (
            
                <Flex width='100%' h='92%' bg='gray.200' fontFamily='Century Gothic ,Segoe UI, Tahoma, Geneva, Verdana, sans-serif' align='center' justify='center'>

                    <LoginPage handleLogin={handleLogin} handleUser={handleUser} handlePassword={handlePassword} username={username} password={password}/>
                    
                </Flex>
                

        )

    
    }

    return (
        
            <Flex width='100%' h='92%' bg='gray.200' fontFamily='Century Gothic ,Segoe UI, Tahoma, Geneva, Verdana, sans-serif' align='center' justify='center'>

                <MainPage />
            </Flex>
            
        
    )
}
export default Main;