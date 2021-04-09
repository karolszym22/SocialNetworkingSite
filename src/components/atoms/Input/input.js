import styled, { css } from 'styled-components';
import magnifierIcon from '../../../assets/icons/magnifier.svg';

const Input = styled.input`
padding: 15px 30px;
font-size: ${({theme}) => theme.fontSize};
border-radius: 50px;
border: none;

::placeholder
{
    text-transform: uppercase;
    letter-spacing: 1px;
   
}
 ${({search}) => 
 search && css`
 padding: 10px 20px 10px 40px;
 background-image: url(${() => magnifierIcon}) ;
 background-position: 10px 50%; //do powtorzenia
 background-repeat: no-repeat;
 background-size: 20px;//do powtorzenia
 `
 }
`;

export default Input;