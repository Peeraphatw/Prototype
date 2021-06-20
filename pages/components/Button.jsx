import React from 'react';
import Styles from '../../styles/Button.module.css';
const Icon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    style={{
      width: '2rem',
      height: '1.4rem',
    }}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 5l7 7-7 7'
    />
  </svg>
);
function Button({ text }) {
  return (
    <>
      <button
        className={`${Styles.buttonfx} ${Styles.slideleft}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          zIndex: 999,
        }}
      >
        <span>{text}</span>
        <Icon />
      </button>
    </>
  );
}

export default Button;
