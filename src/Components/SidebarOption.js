import React from 'react'
import "./SidebarOption.css";

function SidebarOption({ text, Icon, active }) {
    return (
        <div className={active ? 'sidebarOption sidebar_option_active': 'sidebarOption'} >
              {Icon && <Icon />}
              <h3>{text}</h3>
        </div>
    )
}

export default SidebarOption
