import { Fragment, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categoreies from "../components/Categories";
import Footer from "../components/Footer";
import GardenTeam from "../components/GardenTeam";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Span = styled.span`
    position: absolute;
    left: 95%;
    top: 27px;
    font-size: 2.2rem;
    font-weight: bold;
    cursor: pointer;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Home = () => {
    const [offer, setOffer] = useState(true)
    return ( 
        <Container>
            {offer && 
                <Fragment>
                    <Announcement />
                    <Span onClick={() => setOffer(!offer)}>x</Span>
                </Fragment>
            }
            <Navbar />
            <Slider />
            <Categoreies />
            <Products />
            <NewsLetter />
            <Footer />
            <GardenTeam />
        </Container>
     );
}
 
export default Home;