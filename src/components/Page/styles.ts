import styled from 'styled-components';

import airplane from '../../assets/airplane.jpg';
import car from '../../assets/car.jpg';
import ship from '../../assets/ship.jpg';
import motorcycle from '../../assets/motorcycle.jpg';
import train from '../../assets/train.jpg';

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${airplane}) no-repeat;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background: url(${ship}) no-repeat;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: url(${car}) no-repeat;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background: url(${motorcycle}) no-repeat;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background: url(${train}) no-repeat;
    background-size: cover;
  }
`;
