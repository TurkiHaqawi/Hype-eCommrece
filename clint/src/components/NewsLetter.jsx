import styled from 'styled-components'
import { Send } from '@material-ui/icons'
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "50px" })}
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 300; 
    margin-bottom: 20px;
    color: gray;
    ${mobile({ textAlign: "center", fontSize: "18px" })}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 10px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #2a5e77;
    color: #fff;
    cursor: pointer;
`

const NewsLetter = () => {
    return ( 
        <Container>
            <Title>NewsLetter</Title>
            <Description>Get timly updates from your favorite products</Description>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
     );
}
 
export default NewsLetter;