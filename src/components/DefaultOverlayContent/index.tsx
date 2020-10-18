import React from 'react';

import { Container, Header, Buttons } from './styles';

interface Props {
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<Props> = ({ label, description }) => {
  return (
    <Container>
      <Header>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Header>

      <Buttons>
        <button type="button">Custom Order</button>
        <button type="button" className="white">
          Existing Inventory
        </button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
