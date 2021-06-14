import styled from 'styled-components'

const ReactionButton = styled.button` //wiecej info potem
font-family: 'Montserrat', sans-serif;
background-color: ${({theme}) => theme.secondary};
height: 20px;
border: 1px solid black;
cursor: pointer;
width: 100px;
margin: 0px 10px;
color: black;
`
export default ReactionButton