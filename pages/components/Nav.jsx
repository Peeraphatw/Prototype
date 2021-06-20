import React from 'react';
import Styles from '../../styles/Nav.module.css';
import Image from 'next/image';
import Hamberger from './Hamberger';
function Nav() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.icon}>
        {/* <Image
          src='https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-skill-ui/512/game_skill_ui_eagle_eye_hawk_sight-256.png'
          width='114'
          height='54'
        /> */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className={Styles.navlink}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Weed</a>
          </li>
        </ul>
        <Hamberger />
      </div>
    </nav>
  );
}

export default Nav;
