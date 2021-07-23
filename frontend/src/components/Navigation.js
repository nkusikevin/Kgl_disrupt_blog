import React,{useState} from "react"
import {Link} from "react-router-dom"

 export default function Navigation (){
     const navLinks =[
        {
            title:'Home',
            path:'/'
        },
        {
            title:"Politics",
            path:"/politics"
        },
        {
            title:"Entertainment",
            path:"/entertainment"
        },{
            title:"Tech",
            path:"/tech"
        },
        {
            title:"Sports",
            path:"/sports"
        }
     ]
     const [menuActive,setMenuActive] = useState(false)
     return(
     <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
         <span className="menu-title">Kgl Disrupt</span>
         <div className="menu-content-container">
         <ul>
               {navLinks.map((links,index)=>(
                  
                  <li key={index}> <Link to={links.path}>{links.title}</Link></li>
                  
        ))}
         </ul>
          </div>
          <i 
            className="icon ionicons ion-ios-menu"
            onClick={(ev) => setMenuActive(!menuActive)}
        />
     </nav>)
 }