import React from 'react';
import NavigationMenu from '../organisms/NavigationMenu';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ColumnPosts = styled.div`

display: flex;
flex-direction: column;
align-items: center;

`

const UserPageTemplete = ({children}) => 
(
    <>

    <NavigationMenu/>
    <ColumnPosts>{children}</ColumnPosts>

    </>
)

UserPageTemplete.propsTypes = 
{
    children: PropTypes.element.isRequred,
}


export default UserPageTemplete;