import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplete from './UserPageTemplete';

const PostDetailTemplate = ({children}) => 
(
    <UserPageTemplete>
       {children}
       {console.log(children)};
       <Link to="/">Wróć</Link>
    </UserPageTemplete>
)

export default PostDetailTemplate;