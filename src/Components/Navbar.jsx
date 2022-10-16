import { Box, Button, ButtonGroup, Flex, SimpleGrid, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

  return (
    <div>
      <SimpleGrid columns={3} spacing="10px">
        <Box bg="#a21d46" width="1366px" height="80px" />
        <div className='pagelink'>
          <Link to="/data" id='lin' >Data</Link>
          <Link to="/code" id='lin' >Code</Link>
          <Link to="/discussion" id='lin'>Discussion</Link>
        </div>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Spacer />
          <ButtonGroup gap='2'>
            <Button backgroundColor="#a21d46" color="white" border="none"><Link id='lin' to="signup">SignUp</Link> </Button>
            <Button backgroundColor="#a21d46" color="white" border="none"><Link id='lin' to="login" >LogIn</Link></Button>
          </ButtonGroup>
        </Flex>
      </SimpleGrid>
      
    </div>
  )
}

export default Navbar
