import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Container = styled.div`
    height:60px;   
`
const Wrapper = styled.div`
padding: 10px 20px ;
display : flex;
align-items: center;
justify-content : space-between;
`

const Left = styled.div`
flex :1;
display: flex;
align-items: center;
`
const Language = styled.div`
font-size:14px;
cursor :pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex ;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border: none;
`

const Center = styled.div`
flex :1;
text-align: center;
 `

const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
flex :1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>VN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><Logo>ROSEPET</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge color="secondary" badgeContent={4}>
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

