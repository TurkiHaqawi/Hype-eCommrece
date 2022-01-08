import styled from 'styled-components'
import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import {mobile} from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    background-color: #fbeff4;
    ${mobile({ flexDirection: "column" })}
`

// Left side
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;  
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialItem = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

// Center side
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
        color: teal;
    }
`


// Right side
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fafafa" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
    return ( 
        <Container>
            <Left>
                <Logo>Hype.</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, numquam incidunt. Repellat aspernatur ut accusantium dolorum voluptatum incidunt vero dicta tempora reiciendis. Asperiores voluptatibus tenetur mollitia minima beatae at aspernatur!</Desc>
                <SocialContainer>
                    <SocialItem color="3B5999">
                        <Facebook />
                    </SocialItem>
                    <SocialItem color="EE405F">
                        <Instagram />
                    </SocialItem>
                    <SocialItem color="55ACEE"> 
                        <Twitter />
                    </SocialItem>
                    <SocialItem color="E60023">
                        <Pinterest />
                    </SocialItem>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem><Link to='/' className="link">Home</Link></ListItem>
                    <ListItem><Link to='/cart' className="link">Cart</Link></ListItem>
                    <ListItem>Man Hype</ListItem>
                    <ListItem>Women Hype</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/>
                    KSA - Riyadh
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>
                    +96654535
                </ContactItem>
                <ContactItem>
                    <Mail style={{marginRight: "10px"}}/>
                    support@turki.sa
                </ContactItem>
            </Right>
        </Container>
     );
}
 
export default Footer;