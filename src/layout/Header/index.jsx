import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './style.scss'

const Header = () => {

  const store = useSelector((s) => s.user)
  console.log('store', store)
  return (
    <div className="l_header__wrapper">
      <div className="l_header__logo">
        <img src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperBombermanR_image1280w.jpg" alt="" />
      </div>
      <div className="l_header_menu">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/hero">Heros</Link>
        </div>
        <div>
          <p>Account: <br />
          { store.selected.nombres }</p>
        </div>
      </div>
    </div>
  )
}

export default Header


/*

                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |

*/