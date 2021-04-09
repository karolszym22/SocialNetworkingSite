import styled from 'styled-components'

const ReactionButton = styled.button` //wiecej info potem
font-family: 'Montserrat', sans-serif;
background-color: ${({theme}) => theme.primary};
border: none;
cursor: pointer;
width: 100px;
margin: 0px 10px;
color: white;
`
export default ReactionButton