import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplete from './UserPageTemplete';

const PostDetailTemplate = () => 
(
    <UserPageTemplete>
        <h1>Note</h1>
        <p>
            asdasdasdasdasdasdsadasdasdasdasdasdasdsa
        </p>
        <Link to="/">Powrót na główną</Link>
    </UserPageTemplete>
)

export default PostDetailTemplate;