import React from 'react'
import './Menu.css'
import Logo from '../../assets/profile1.png';
import { useState } from 'react';


const Menu = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
        <aside className= {toggle? "aside show-menu" : "aside"}>
            <a href="#home" className='nav_logo'>
                <img src={Logo} alt="" className='profile_img'/>
            </a>
        
            <nav className='nav'>
                <div className='nav_menu'>
                    <ul className='nav_list'>
                        <li className='nav_item'>
                            <a href="#about" className='nav_link'>About Me
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#skills" className='nav_link'>Tools & Technologies
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#experiences" className='nav_link'>Experience & Education
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#videos" className='nav_link'>Video Library
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#projects" className='nav_link'>Recent Work
                            </a>
                        </li>
                    </ul>

                    <ul className='nav_list_icons'>
                        <li className='nav_item'>
                            <a href="" className='nav_link'>
                            <i className="fa-brands fa-linkedin icon slideright li_logo"
                            alt="linked_in"
                            onclick="window.open('LINK')"></i> 
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="" className='nav_link'>
                            <i className="fa-brands fa-github icon slideright gh_logo"
                            alt="Github_profile"
                            onclick="window.open('LINK')"></i>
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="" className='nav_link'>
                            <i className="fa-brands fa-youtube yt_logo"
                            alt="Youtube_Channel"
                            onclick="window.open('LINK')"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" className='nav_link'>
                            <i className="fa-regular fa-envelope email_logo"
                            alt="Email"
                            onclick="window.open('LINK')"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav_footer">
                <span className="copyright">&copy; 2025 Ferdinand</span>
            </div>

        </aside>

        <div className={toggle ? "nav_toggle nav_toggle-open" :
            "nav_toggle"} onClick={()=>showMenu(!toggle)}>
            <i className='icon-menu'></i>
        </div>
    </>
  )
}

export default Menu;