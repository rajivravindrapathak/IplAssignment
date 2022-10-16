import { Box, Button, ButtonGroup, Flex, SimpleGrid, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

  return (
    <div>
      <SimpleGrid columns={3} spacing="10px">
        <Box bg="tomato" width="1366px" height="80px" />
        <div className='pagelink'>
          <Link to="/data">Data</Link>
          <Link to="code" >Code</Link>
          <Link to="discussion">Discussion</Link>
        </div>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Spacer />
          <ButtonGroup gap='2'>
            <Button backgroundColor="tomato" color="white" border="none"><Link to="signup">SignUp</Link> </Button>
            <Button backgroundColor="tomato" color="white" border="none"><Link to="login" >LogIn</Link></Button>
          </ButtonGroup>
        </Flex>
      </SimpleGrid>
    </div>
  )
}

export default Navbar
