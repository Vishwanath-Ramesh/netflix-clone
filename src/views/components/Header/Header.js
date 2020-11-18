import React from 'react'
import {
  Search as SearchIcon,
  CardGiftcard,
  Notifications,
} from '@material-ui/icons'

import account from '../../../assets/images/netflix-account.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <a className="header__home">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
          alt="Netflix"
        />
      </a>
      <ul className="header__navigation">
        <li className="header__navitem">Home</li>
        <li className="header__navitem">TV Shows</li>
        <li className="header__navitem">Movies</li>
        <li className="header__navitem">New & Popular</li>
        <li className="header__navitem">My List</li>
      </ul>
      <div className="header__actions">
        <span className="header__search">
          <SearchIcon />
        </span>
        <span className="header__gift">
          <CardGiftcard />
        </span>
        <span className="header__notification">
          <Notifications />
        </span>
        <span className="header__account">
          <img src={account} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Header
