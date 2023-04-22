import { ICONS } from "../icons/Icons";
import { PATH } from "../service/Path";


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
];

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
    route: PATH.ConnectedAuthPath.profile
  },
  {
    id:34,
    caption: "Products",
    route: PATH.ConnectedAuthPath.products
  },
];


const SliderList = [
  {
    id:1,
    img: "https://free4kwallpapers.com/uploads/originals/2015/10/03/winter-europe-street-snow-shopping.jpg"
  },
  {
    id:2,
    img: "https://wallpaperaccess.com/full/418794.jpg"
  },
];



const adminList = [
  {
    id:1,
    title: "Profile",
    route: PATH.AdminPath.profile,
    icons: ICONS.ImProfile
  },
  {
    id:2,
    title: "Products",
    route: PATH.AdminPath.products,
    icons: ICONS.MdProductionQuantityLimits
  },
  {
    id:3,
    title: "Contacts",
    route: PATH.AdminPath.contacts,
    icons: ICONS.MdContacts
  },
  {
    id:4,
    title: "Categories",
    route: PATH.AdminPath.category,
    icons: ICONS.TbCategory
  },
  {
    id:5,
    title: "Slider",
    route: PATH.AdminPath.slider,
    icons: ICONS.TfiLayoutSlider
  },
]



export const LIST = {
  HeaderTopIcons,
  HeaderBottomElements,
  SliderList,
  adminList
};