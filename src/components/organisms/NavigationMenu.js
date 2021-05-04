import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderButton from '../atoms/Button/headerButtons/HeaderButton'
import friendsIcon from '../../assets/icons/header/friends.svg'
import informationIcon from '../../assets/icons/header/information.svg'
import messageIcon from '../../assets/icons/header/message.svg'

const NavigationMenu = () =>
(
    <div>
        <p>Fakebook</p>
        <div>
            <HeaderButton as={Link} to="/" icon={friendsIcon} />
            <HeaderButton as={Link} icon={messageIcon} />
            <HeaderButton as={Link} icon={informationIcon} />
        </div>
    </div>
)