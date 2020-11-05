import React from 'react'
import logo from './images/new.png'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Header.css';

function Header() {
    return (
        <div className='header'>
       
            <img className='header_icon' src={logo} alt=''/>
          

          <div className='header_search'>
                 <input type='text'/>
                 <SearchIcon/>
          </div>

          <div className='header_right'>
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <AccountCircleIcon/>
          </div>
        </div>
    )
}

export default Header
