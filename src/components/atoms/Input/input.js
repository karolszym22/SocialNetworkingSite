import styled, { css } from 'styled-components';

const Input = styled.input`
padding: 15px 30px;
font-size: ${({theme}) => theme.fontSize};
border: none;
border-radius: 50px;

::placeholder
{
    text-transform: uppercase;
    letter-spacing: 1px;
   
}
 ${({search}) => 
 search && css`
 padding: 10px 20px 10px 40px;
 
 `
 }
`;

export default Input;