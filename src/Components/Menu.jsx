import React from 'react'
import Style from "./nav.module.css"
const Menu = () => {
  return (
        <ol id={Style.menuBlock}>
            <li><a href="#">Explore Work</a></li>
            <li><a href="#">Hire Talents</a></li>
            <li><a href="#">Challengs</a></li>
        </ol>
  )
}

export default Menu