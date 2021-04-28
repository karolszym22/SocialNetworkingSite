import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Heading from 'components/atoms/Heading';
import Button from '../../atoms/Button/reactionButtons';

const StyledWrapper = styled.div`
padding: 17px 30px;
`

const PostCard = () =>
{
    <StyledWrapper>
        <Heading>
            Karol Szymański
        </Heading>
        <Paragraph>
            Dobra,wstawiłem kolejny posta, sorry za to, no ale.....musiałem. Tak więc dobranoc, słodkich snów
        </Paragraph>
        <Button>
       </Button>
    </StyledWrapper>
}