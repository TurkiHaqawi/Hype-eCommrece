import styled from 'styled-components'

const Container = styled.div`
    height: 100px;
    background-color: #bf4e4e;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
`
const Image = styled.img`
height: 100%;
`


const Announcement = () => {
    return ( 
        <Container>
            Super Deal! Free Shipping on Order over $50 
            <Image src="https://i.ibb.co/fnsbjG4/offer.png"/>
        </Container>
     );
}
 
export default Announcement;