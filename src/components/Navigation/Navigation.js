import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navigation.module.scss'

const Navigation = () =>
(
    <ul className={style.wrapper}>
        <li className={style.navElement}><Link to="/">Posts</Link></li>
        <li className={style.navElement}><Link to="/profileView">Profile</Link></li>
    </ul>
)

export default Navigation;