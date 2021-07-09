import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplete from './UserPageTemplete';

const PostDetailTemplate = ({children}) => 
(
    <UserPageTemplete>
       {children}
       <Link to="/">adasdas</Link>
    </UserPageTemplete>
)

export default PostDetailTemplate;