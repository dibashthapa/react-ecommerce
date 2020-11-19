import { GrPersonalComputer } from "react-icons/gr";
import { BsFillImageFill, BsGiftFill } from "react-icons/bs";
import { FaFileAlt, FaShoppingCart } from "react-icons/fa";
import { GiCube } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
export const routes = [
  {
    name: "Home",
    link: "/",
    icon: GrPersonalComputer,
  },
  {
    name: "Media",
    link: "/store-manager/media",
    icon: BsFillImageFill,
  },
  {
    name: "Articles",
    link: "/store-manager/articles",
    icon: FaFileAlt,
  },
  {
    name: "Products",
    link: "/store-manager/products",
    icon: GiCube,
  },
  {
    name: "Orders",
    link: "/store-manager/orders",
    icon: FaShoppingCart,
  },
  {
    name: "Customers",
    link: "/store-manager/customers",
    icon: BsGiftFill,
  },
  {
    name: "Settings",
    link: "/store-manager/settings",
    icon: AiFillSetting,
  },
];
