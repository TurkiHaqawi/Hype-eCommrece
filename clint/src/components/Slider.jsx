import styled from 'styled-components'
import { useState } from 'react';
import {mobile} from '../responsive'
import { useEffect } from 'react';
import {sliderItems} from '../data'


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    display: flex;
    // justify-content: center;
    flex-direction: row;
    // background: #2696E9;
    // ${mobile({ display: "none" })};
    &:after {
        z-index: 777;
        content: '';
        position: absolute;
        background: rgba(3, 96, 251, 0.3);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`

// Slider
const SLiderContainer = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
`
const VideoItem = styled.video`
    z-index: 000;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    clip-path: circle(0% at 0 50%);
    &.active {
        clip-path: circle(150% at 0 50%);
        transition: 1.5s ease;
        transition-property: clip-path;
    }
`
const Content = styled.div`
    z-index: 888;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 4em;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 75px;
    margin-bottom: 40px;
`
const Button = styled.button`
    padding: 10px;
    background: transparent;
    color: #fff;
`

// Offer 
const OfferContainer = styled.div`
    flex: 1;
    background: #000;
`


const Slider = () => {

    const [active, setActive] = useState(["active" , "", ""])
    const [counter, setCounter] = useState(1)
    const changeActive = (n) => {
        active[0]="";
        active[1]="";
        active[2]="";
        active[n]="active";
        setActive([...active])
    }

    
    useEffect(() => {
        setTimeout(() => {
            if(counter <= 2) {
                changeActive(counter);
                setCounter(counter + 1)
            } else {
                setCounter(0)
            }
        },3000)
    },[counter])


    return (
        <Container>
            <SLiderContainer>
                {sliderItems.map((item, index) => (
                    <VideoItem className={active[index]} src={item.vedio} key={item.id} autoPlay muted loop/>
                ))}
                <Content>
                    <Title>{sliderItems[counter - 1]?.title}</Title>
                    <Button>SHOW NEW</Button>
                </Content>
            </SLiderContainer>
            <OfferContainer>cdsc</OfferContainer>
        </Container>
     );
}
 
export default Slider;