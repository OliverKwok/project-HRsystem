import React, {useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

// import avatar from "../data/avatar.jpg";
import {Chat, Notification, UserProfile } from "."
import { useStateContext } from "../contexts/ContextProvider"

const NavButton = (title:any, fn:any, icon:any, color:any, dotColor:any) => {
 <button type="button" onClick={fn} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
<span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
{icon}
</span>

 </button>
}

const Navbar = () => {
 const {activeMenu,setActiveMenu} = useStateContext()
  
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* <NavButton title="Menu" fn={()=>{}} icon={<GiHamburgerMenu />}/> */}
    Navbar
    </div>
  )
}

export default Navbar  