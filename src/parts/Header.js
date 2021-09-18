import React, {useState, useEffect}from 'react';


import {Flex,Center, Button} from '@chakra-ui/react';

const Header = ({login, handleLogin}) => (
    <>
        <Flex 
            w='100%' 
            bg='navy'
            h='8%'
            color='white'
            fontWeight='bold'
            fontSize= '20px'
            justify='space-between'
            fontFamily='Century Gothic ,Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
        >

            <Center h='100%' pl='15px'>
                Expense Manager
            </Center>
            {login && (<Center px='5px'><Button w='60px' h='70%' bg='red' fontSize='12px' fontWeight='bold' color='white' _hover={{opacity:'0.8'}} onClick={()=>handleLogin()}>Log out</Button></Center>)}

        </Flex>
        
    </>
)
export default Header;