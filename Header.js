//rfce
import React from 'react'
import ytLogo from './images/yt-logo.jpg'
import searchIcon from'./images/search.jpeg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiMicrophone} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div class= "head-container">
      <div class="first">
      <div class="item1">
          <div class="a1">
          <GiHamburgerMenu />
          </div>
          <div class="a2">
            <Link to= '/'>
            <img id='yt-logo' src={ytLogo}/>
            </Link>
          </div>
      </div>
      <div class="item2">
          {/* <div class="b1"></div> */}
          <input class="header-search" placeholder='  Search..'/>
          <button class= "search-button">
            <img class="small-image" src= {searchIcon}></img>
                    </button>
          <div class="b2">
            <BiMicrophone class="microphone"/>
          </div>
          </div>
      <Link to={'/Signin'}>
      <button class="item3">Sign In
      </button>
      </Link>
     </div>
   </div>
   
  )
}

export default Header
