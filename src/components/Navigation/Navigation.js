import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navigation.module.scss'

const Navigation = () =>
(
    <ul className={style.wrapper}>
        <li><Link to="/">Posts</Link></li>
        <li><Link to="/profileView">Profile</Link></li>
    </ul>
)

export default Navigation;