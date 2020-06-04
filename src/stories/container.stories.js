import '../index.css'

import React from 'react';

import { Container } from '../components/Container'

export default { title: 'Container' };

export const container = () => <Container>Hello Container</Container>;

export const withDivs = () => (
  <Container>
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
  </Container>
);

export const withFlexDivs = () => (
  <Container>
    <div className="f">
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
    </div>
  </Container>
);