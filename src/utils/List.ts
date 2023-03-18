import { ICONS } from "../icons/Icons"
import { PATH } from "../service/Path"


const HeaderTopIcons = [
  
  {
    id:1,
    icon: ICONS.FaWhatsapp,
  },
  {
    id:2,
    icon: ICONS.AiOutlineInstagram,
  },
  {
    id:3,
    caption: "Log In",
    route: PATH.ConnectedAuthPath.login,
  },
  {
    id:4,
    caption: "Sign Up",
    route: PATH.ConnectedAuthPath.register,
  },
]

const HeaderBottomElements = [
  {
    id:1,
    caption: "About",
  },
  {
    id:323,
    caption: "Contacts",
  },
  {
    id:41,
    caption: "Profile",
  },
  {
    id:34,
    caption: "Products",
  },
]

export const LIST = {
  HeaderTopIcons,
  HeaderBottomElements
}