import '../index.css'
import React from 'react';
import { Header } from '../components/Header';

export default { title: 'Header' };

export const withText = () => <Header>Hello</Header>;
