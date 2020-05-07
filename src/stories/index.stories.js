import '../index.css'
import React from 'react';
import { Button } from '../components/Button';

import { Input } from '../components/Input'

export default { title: 'Button' };

const onClick = () => console.log("Hello")
export const withText = () => <Button onClick={onClick}>Hello Button</Button>;
export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const inputTest = () => <Input inputName="Hello"></Input>