import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import Styles from '../../styles/CardContainer.module.css';
function CardContainer({ picture }) {
  return (
    <div style={{ position: 'relative' }} className={Styles.animate}>
      <Image src={picture} width='1920' height='900' />
      <Button text='Details' />
    </div>
  );
}

export default CardContainer;
