import { useState } from 'react'
import styled from 'styled-components'
import {menuData} from '../data'

const Container = styled.div`
    background-color: #${props => props.background};
    width: 100%;
    height: 50vh;
    margin-top: 3.8%;
    padding: 10px;
    position: absolute;
    top: 10%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    user-select: none;
    z-index: 999;
`

// left Side
const LeftSide = styled.div`
    flex: 1;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    opacity: 0.5;
`
const LeftImg = styled.img`
    height: 100%;
    border-radius: 10px;
`


// Right Side
const RightSide = styled.div`
    flex: 1;
    height: 300px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const RightTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
`
const ImgContainer = styled.div`
    width: 50%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    // background: #000;
    min-width: 280px;
`
const RightImg = styled.img`
    height: 40%;
    width: 30%;
    margin-right: 10px;
`

const MenuDropdown = ({menuNumber}) => {
    const [changeMenuNumber, setChangeMenuNumber] = useState(menuData[menuNumber])
    return ( 
        <Container background={changeMenuNumber.background}>
            <LeftSide>
                <LeftImg src={changeMenuNumber.leftImg.img1} />
                <LeftImg src={changeMenuNumber.leftImg.img2} />
            </LeftSide>
            <RightSide>
                <RightTitle>{changeMenuNumber.title}</RightTitle>
                <ImgContainer>
                    <RightImg src={changeMenuNumber.rightImg.img1} />
                    <RightImg src={changeMenuNumber.rightImg.img2} />
                    <RightImg src={changeMenuNumber.rightImg.img3} />
                    <RightImg src={changeMenuNumber.rightImg.img4} />
                </ImgContainer>
            </RightSide>
        </Container>
     );
}
 
export default MenuDropdown;