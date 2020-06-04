import '../index.css'
import React from 'react';
import { Dropdown } from '../components/Dropdown';

export default { title: 'Dropdown' };

export const withShow = () => (
  <Dropdown show={true}>
    <div>
    😀
    </div>
    <div>
    😎
    </div>
    <div>
    👍 
    </div>
    <div>
    💯
    </div>
  </Dropdown>
);

export const withoutShow = () => (
  <Dropdown show={false}>
    <div>
    😀
    </div>
    <div>
    😎
    </div>
    <div>
    👍 
    </div>
    <div>
    💯
    </div>
  </Dropdown>
);