import React, {useRef} from 'react';
import {Text,Flex,Center, Box, Button} from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
import {FaUser} from 'react-icons/fa';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl, FormLabel, Input, Textarea
  } from "@chakra-ui/react"

  import { useDisclosure } from "@chakra-ui/react";
  import Chart from './Chart.js';


const MainPage = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef();
    const finalRef = React.useRef();
    
    return(
       <Flex w='100%' h='100%' align='center' justify='center' flexDirection={['column',null,null,'row']}>
           <Flex bg='gray.100' w={['100%',null,null,'30%']} h={['40%',null,null,'100%']} align={[null,null,null,'center']}>
               <Box h='200px'color='navy' w='100%'  p='10px'>
                    <Center><FaUser fontSize='80px'/></Center>
                    <Text as='p' color='green' textAlign='center' fontSize={['20px','30px','40px']} fontWeight='bold' pb='10px'>Jane Doe</Text>
                    <Text as='h3' textAlign='center'>Frontend Developer</Text>
                    <Text as='p' fontSize='15px' fontWeight='bold' textAlign='center'>Department of Information Technology</Text>
               </Box>
                
           </Flex>
           <Box bg='white' w={['100%', null, null, '70%']} h={['60%',null,null,'100%']}>
               <Box bg='white' h='30px' w='100%' boxShadow='1px 1px 4px gray' px='5px'><Text as='span' fontSize='17px' color='blue.600'>Amount to be reimbursed: </Text><Text as='span'>$2555.67</Text></Box>
               <Flex overflow='auto' h='50%'>
                    
                    <Table size="sm">
                        <Thead>
                            <Tr>
                            <Th>Date</Th>
                            <Th>Merchant</Th>
                            <Th >Total</Th>
                            <Th >Status</Th>
                            <Th >Comment</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                            <Td>09/17/21</Td>
                            <Td>Hotel</Td>
                            <Td >$25.4</Td>
                            <Td>New</Td>
                            <Td>Expense from my business trip</Td>

                            </Tr>
                            <Tr>
                            <Td>09/12/21</Td>
                            <Td>Electronics</Td>
                            <Td >$120</Td>
                            <Td>In Progress</Td>
                            <Td>Expense from my business trip</Td>
                            </Tr>
                            
                        </Tbody>
                        {/* <Tfoot>
                            <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot> */}
                        </Table>
                </Flex>

                <Button position='fixed' h='30px' w='30px' textAlign='center' bottom='30px' right='10px' p='20px' bg='navy' color='white' fontSize='30px' fontWeight='bold' borderRadius='50%' boxShadow='1px 1px 4px gray' _hover={{opacity:'0.8'}} onClick={onOpen}>+</Button>
                <Flex w='100%' justify='center' align='center'>
                            <Modal
                            closeOnOverlayClick={false} 
                            initialFocusRef={initialRef}
                            finalFocusRef={finalRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Add Expense</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Merchant</FormLabel>
                                <Input ref={initialRef} />
                            </FormControl>
                
                            <FormControl mt={4}>
                                <FormLabel>Total</FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Date</FormLabel>
                                <Input type='date' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Comment</FormLabel>
                                <Textarea ></Textarea>
                            </FormControl>
                            <Button variantColor="blue" mt={4}>
                                Select receipt
                            </Button>
                            </ModalBody>
                
                            <ModalFooter>
                            <Button bg='navy'color='white' _hover={{opacity:'0.8'}}mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                        </Modal>
                    </Flex>

                <Flex justify='center' h='50%' w='100%' overflow='auto'>
                    <Chart />
                </Flex>
           </Box>

           
       </Flex>

)
}
export default MainPage;