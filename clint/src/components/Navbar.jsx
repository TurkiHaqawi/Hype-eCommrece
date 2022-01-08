import React, { useState } from 'react';
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {mobile} from '../responsive'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { logout } from '../redux/userRedux';
import { removeProducts } from '../redux/cartRedux';
import Dropdown from './Dropdown';
import MenuDropdown from './MenuDropdown';

const Container = styled.div`
    height: 60px;
    background-color: #fa600094;
    position: relative;
    ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`;

// Left Side
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Lnaguage = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    border-radius: 10px;
    padding: 2px
`
const Input = styled.input`
    border: none;
    padding: 5px;
    outline: none;
    background-color: transparent;
    ${mobile({width: "50px"})}
`

// Center Side
const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const CenterItem = styled.span`
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    user-select: none;
    &:hover {
        background-color: #fa600045;
    }
`

// Right Side
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center"})}
`
const Logo = styled.h1`
    font-weight: bold;
    margin-left: 10px;
    ${mobile({fontSize: "24px"})}
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    const [selected, setSelected] = useState('All categories')
    const [menuNumber, setMenuNumber] = useState(0)
    const [menuDropdown, setMenuDropdown] = useState(false)
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector(state => state.user.currentUser)
    const dipatch = useDispatch()

    const handleLogout = () => {
        dipatch(logout())
        dipatch(removeProducts())
    }

    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Lnaguage>EN</Lnaguage>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: "gray", fontSize:18}}/>
                    </SearchContainer>
                    <Logo>Hype.</Logo>
                </Left>
                <Center>
                    <CenterItem onClick={() => {setMenuDropdown(!menuDropdown); setMenuNumber(0)}} onMouseEnter={() => setMenuDropdown(!MenuDropdown)}>Man</CenterItem>
                    <CenterItem onClick={() => {setMenuDropdown(!menuDropdown); setMenuNumber(1)}} onMouseEnter={() => setMenuDropdown(!MenuDropdown)}>Woman</CenterItem>
                    <CenterItem onClick={() => {setMenuDropdown(!menuDropdown); setMenuNumber(2)}} onMouseEnter={() => setMenuDropdown(!MenuDropdown)}>Kids</CenterItem>
                    {menuDropdown && <MenuDropdown menuNumber={menuNumber} setMenuNumber={setMenuNumber} />}
                </Center>
                <Right>
                    {user ? <MenuItems onClick={handleLogout}>LOGOUT</MenuItems> : (
                        <>
                            <Dropdown selected={selected} setSelected={setSelected}/>
                            <Link to="/login" className="link">
                                <MenuItems>SIGN IN</MenuItems>
                            </Link>
                        </>
                    )}
                    <Link to="/cart" className="link">
                        <MenuItems>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItems>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
     );
}
 
export default Navbar;