import React, { useRef, useState, useEffect } from 'react';
import Styles from '../../styles/Hamberger.module.css';
function Hamberger() {
  const menuBtn = useRef();
  const [isClick, setIsClick] = useState(false);
  const Toggle = () => {
    isClick
      ? menuBtn.current.classList.add('open')
      : menuBtn.current.classList.remove('open');
  };
  useEffect(() => {
    menuBtn.current.addEventListener('click', Toggle);
    return () => {
      menuBtn.current.removeEventListener('click', Toggle);
    };
  }, [isClick]);
  return (
    <>
      <div
        className={`${Styles.menu_btn} ${isClick ? Styles.open : ''}`}
        style={{ marginLeft: 'auto' }}
        ref={menuBtn}
        onClick={() => setIsClick(!isClick)}
      >
        <div className={Styles.menu_btn__burger}></div>
      </div>
      <div
        className={Styles.hammber_menu}
        style={{ display: isClick ? 'block' : 'none' }}
      >
        <a href=''>Lorem ipsum dolor sit amet.</a>
        <a href=''>Lorem ipsum dolor sit amet.</a>
        <a href=''>Lorem ipsum dolor sit amet.</a>
        <a href=''>Lorem ipsum dolor sit amet.</a>
        <a href=''>Lorem ipsum dolor sit amet.</a>
      </div>
    </>
  );
}

export default Hamberger;
