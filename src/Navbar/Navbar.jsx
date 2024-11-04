import { useState } from "react";
import Link from "./Link/Link";
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
const [open,setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
      ];
      
    return (
     <nav className="text-black p-6 bg-red-400">
       <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
        {
            open === true ? <IoCloseSharp></IoCloseSharp>
            :
            <TiThMenuOutline></TiThMenuOutline>
        }
      
       
       </div>
      <ul className={`md:flex absolute duration-1000 md:justify-center md:static
        ${open ? 'top-16':'-top-60'}
        bg-red-400 px-6 `}>
      {
            routes.map(route =><Link route={route}  key={route.id} ></Link>)
        }
      </ul>
     </nav>
    );
};

export default Navbar;