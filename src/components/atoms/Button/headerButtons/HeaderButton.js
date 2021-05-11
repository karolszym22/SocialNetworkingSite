import styled from 'styled-components'
import message from '../../../../assets/icons/header/message.svg'

const HeaderButton = styled.button` //wiecej info potem
font-family: 'Montserrat', sans-serif;
background-color: ${({theme}) => theme.primary};
background-image: url(${({icon}) => icon});
background-size: 20px;
background-position: 10px 50%;
background-repeat: no-repeat;
height:40px;
border: none;
cursor: pointer;
width: 40px;
margin: 0px 10px;
color: white;


`
export default HeaderButton