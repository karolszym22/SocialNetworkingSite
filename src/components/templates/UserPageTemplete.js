import React from 'react';
import NavigationMenu from '../organisms/NavigationMenu';
import PropTypes from 'prop-types';

const UserPageTemplete = ({children}) => 
(
    <>

    <NavigationMenu/>
    {children}

    </>
)

UserPageTemplete.propsTypes = 
{
    children: PropTypes.element.isRequred,
}


export default UserPageTemplete;