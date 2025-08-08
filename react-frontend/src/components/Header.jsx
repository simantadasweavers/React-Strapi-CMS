import { useState } from "react";
import { useEffect } from "react"
import axios from "../Auth/Axios";
import { Link } from "react-router-dom";


export const Header = () => {

   const [data, setData] = useState({});
   const strapi_url = import.meta.env.VITE_STRAPI_BACKEND_URL;
   const no_image_url = "src/assets/images/no_image.jpg";

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios({
            url: `${import.meta.env.VITE_STRAPI_BACKEND_URL}/api/global?populate[0]=Header_Section.Header_Image`,
            method: 'GET',
         });
         setData(response.data.data);
      }
      fetchData();
   }, [])



   return (
      <>
         <header class="header__main">
            <div class="header-inner__wrapper">
               <div class="container">
                  <div class="header-row d-flex align-items-center justify-content-between">
                     <div class="logo-wrap">
                        <Link to="/">
                        <img src={data?.Header_Section?.Header_Image?.url ? (strapi_url + data.Header_Section.Header_Image.url) : no_image_url} alt="Header Logo" />
                        </Link>
                     </div>
                     <div class="desktop-menu">
                        <ul class="nav">
                           <li><Link to="/">Home</Link></li>
                           <li><Link to="/founder">Founder</Link></li>
                           <li><Link to="/team">Team</Link></li>
                           <li><Link to="/companies">Companies</Link></li>
                           <li class="menu-item-has-children">
                              <a href="#">Insights</a>
                              <ul class="sub-menu">
                                 <li><Link to="/articles">Our Articles</Link></li>
                                 <li><Link to="/podcasts">Our Podcasts</Link></li>
                                 <li><Link to="/videos">Our Videos</Link></li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                     <div class="right-col d-flex align-items-center">
                        <div class="buttom-wrap">
                           <Link to={data?.Header_Section?.Button_Url ? data.Header_Section.Button_Url : ''} class="button__primary">
                              <span>{data?.Header_Section?.Button_Title ? data.Header_Section.Button_Title : ''}</span>
                           </Link>
                        </div>
                        <div class="hamburger-nav">
                           <span></span>
                           <span></span>
                           <span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="mobile-menu">
               <div class="top-row d-flex align-items-center justify-content-between">
                  <div class="logo-wrap">
                     <Link to="/">
                        <img src={data?.Header_Section?.Header_Image?.url ? (strapi_url + data.Header_Section.Header_Image.url) : no_image_url} alt="Header Logo" />
                     </Link>
                  </div>
                  <div class="hamburger-nav-close">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
               <div class="mobile-menubar">
                  <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/founder">Founder</Link></li>
                     <li><Link to="/team">Team</Link></li>
                     <li><Link to="/companies">Companies</Link></li>
                     <li class="menu-item-has-children">
                        <a href="#">Insights</a>
                        <ul class="sub-menu">
                           <li><Link to="/articles">Our Articles</Link></li>
                           <li><Link to="/podcasts">Our Podcasts</Link></li>
                           <li><Link to="/videos">Our Videos</Link></li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </header>

      </>
   )
}
