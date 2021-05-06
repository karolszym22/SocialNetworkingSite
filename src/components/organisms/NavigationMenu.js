import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderButton from '../atoms/Button/headerButtons/HeaderButton'
import friendsIcon from '../../assets/icons/header/friends.svg'
import informationIcon from '../../assets/icons/header/information.svg'
import messageIcon from '../../assets/icons/header/message.svg'
import logoutIcon from '../../assets/icons/header/logout.svg'

const Header = styled.div`

height: 50px;
display: flex;
height: 100%;
background-color: ${({theme}) => theme.primary};
`

const NavigationMenu = () =>
(
    <div>
        <p>Fakebook</p>
        <div>
            <HeaderButton as={Link} to="/" icon={friendsIcon} />
            <HeaderButton as={Link} to='/messages' icon={messageIcon} />
            <HeaderButton as={Link} to='/informations' icon={informationIcon} />
        </div>
        <HeaderButton as={Link} to='/signIn' icon={logoutIcon} />
    </div>
)