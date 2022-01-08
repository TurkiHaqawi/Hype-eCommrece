import styled from 'styled-components'
import {ArrowDropDown} from '@material-ui/icons'
import { useState } from 'react'


const Container = styled.div`
    width: 300px;
    text-align: left;
    position: relative;
    z-index: 888;
    user-select: none;
`
const DropdownBTN = styled.div`
    background-color: transparent;
    padding: 10px;
    box-shadow: 5px 3px 10px 6px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 10px;
`
const DropdownContect = styled.div`
    position: absolute; 
    background-color: #fff;
    padding: 10px;
    box-shadow: 5px 3px 10px 6px rgba(0,0,0,0.06);
    top: 110%;
    left: 0;
    width: 93.5%;
    border-radius: 10px;
`
const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #fa600045;
        border-radius: 10px;
    }
`

const Dropdown = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false)
    const options = ["ADDIDAS HYPE", "NIKE HYPE", "PUMA HYPE"]
    return ( 
        <Container>
            <DropdownBTN onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <ArrowDropDown />
            </DropdownBTN>
            {isActive && (
                <DropdownContect>
                    {options.map(option => (
                        <DropdownItem onClick={(e) =>{
                            setSelected(option);
                            setIsActive(false);
                        }}>{option}</DropdownItem>
                    ))}
                </DropdownContect> 
            )}
        </Container>
     );
}
 
export default Dropdown;