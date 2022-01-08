import styled from 'styled-components'
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'


const Container = styled.div`
    // flex: 1;
    margin: 3px;
    height: 80vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
    opacity: 0.7;
    ${mobile({ height: "30vh", borderRadius: "20px" })}
`
const Info = styled.div`
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;  
`
const Title = styled.h1`
    color: #683d67;
    margin-bottom: 20px;
    font-size: 3rem;
    font-weight: bold;   
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #683d67;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
    return ( 
        <Container>
            <Link to={`/products/${item.title}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
     );
}
 
export default CategoryItem;