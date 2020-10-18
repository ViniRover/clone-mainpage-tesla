import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Rover © 2020</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Planes</a>
          </li>
          <li>
            <a href="#">Cars</a>
          </li>
          <li>
            <a href="#">Ships</a>
          </li>
          <li>
            <a href="#">Motorcycle</a>
          </li>
          <li>
            <a href="#">Trains</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
