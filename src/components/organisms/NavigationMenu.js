import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HeaderButton from '../atoms/Button/headerButtons/HeaderButton'
import friendsIcon from '../../assets/icons/header/friends.svg'
import informationIcon from '../../assets/icons/header/information.svg'
import messageIcon from '../../assets/icons/header/message.svg'
import logoutIcon from '../../assets/icons/header/logout.svg'

const Header = styled.div`

height: 50px;
display: flex;
justify-content: space-around;
background-color: #4268b2;
`
const HeaderLogo = styled.div`
color: white;
display: flex;
align-items: center;
font-size: 18px;
height: 100%;

`

const HeaderMenu =  styled.div`
display: flex;
align-items: center;
`

const NavigationMenu = () =>
(
    <Header>
        <HeaderLogo>
        <p>Fakebook</p>
        </HeaderLogo>
         <HeaderMenu>
            <HeaderButton as={NavLink} to="/" icon={friendsIcon} activeclass="active"  />
            <HeaderButton as={NavLink} to='/messages' icon={messageIcon} activeclass="active"  />
            <HeaderButton as={NavLink} to='/informations' icon={informationIcon} activeclass="active" />
            <HeaderButton as={NavLink} to='/login' icon={logoutIcon}  />
            </HeaderMenu> 
    </Header>
)

export default NavigationMenu;