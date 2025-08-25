import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react"
import axios from "../Auth/Axios";
import { Link } from "react-router-dom";


export const Header = () => {

   const [data, setData] = useState({});
   const strapi_url = import.meta.env.VITE_STRAPI_BACKEND_URL;
   const no_image_url = "src/assets/images/no_image.jpg";
   const [menuOpen, setMenuOpen] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(null);
   const headerRef = useRef(null);


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

   useEffect(() => {
      if (headerRef.current) {
         const height = headerRef.current.offsetHeight;
         document.querySelector(".header__main").style.height = `${height}px`;
      }
   }, [data]);
   const toggleMenu = () => setMenuOpen(!menuOpen);
   const closeMenu = () => setMenuOpen(false);
   const toggleDropdown = (index) => setOpenDropdown(openDropdown === index ? null : index);



   return (
      <>
         <header className={`header__main ${menuOpen ? "menu-open" : ""}`}>
            <div className="header-inner__wrapper" ref={headerRef}>
               <div className="container">
                  <div className="header-row d-flex align-items-center justify-content-between">
                     <div className="logo-wrap">
                        <Link to="/">
                           <img
                              src={
                                 data?.Header_Section?.Header_Image?.url
                                    ? strapi_url + data.Header_Section.Header_Image.url
                                    : no_image_url
                              }
                              alt="Header Logo"
                           />
                        </Link>
                     </div>
                     <div className="desktop-menu">
                        <ul className="nav">
                           <li>
                              <Link to="/">Home</Link>
                           </li>
                           <li>
                              <Link to="/founder">Founder</Link>
                           </li>
                           <li>
                              <Link to="/team">Team</Link>
                           </li>
                           <li>
                              <Link to="/companies">Companies</Link>
                           </li>
                           <li className="menu-item-has-children">
                              <a href="#">Insights</a>
                              <ul className="sub-menu">
                                 <li>
                                    <Link to="/articles">Our Articles</Link>
                                 </li>
                                 <li>
                                    <Link to="/podcasts">Our Podcasts</Link>
                                 </li>
                                 <li>
                                    <Link to="/videos">Our Videos</Link>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                     <div className="right-col d-flex align-items-center">
                        <div className="buttom-wrap">
                           <Link
                              to={data?.Header_Section?.Button_Url || ""}
                              className="button__primary"
                           >
                              <span>{data?.Header_Section?.Button_Title || ""}</span>
                           </Link>
                        </div>
                        <div className="hamburger-nav" onClick={toggleMenu}>
                           <span></span>
                           <span></span>
                           <span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
               <div className="top-row d-flex align-items-center justify-content-between">
                  <div className="logo-wrap">
                     <Link to="/">
                        <img
                           src={
                              data?.Header_Section?.Header_Image?.url
                                 ? strapi_url + data.Header_Section.Header_Image.url
                                 : no_image_url
                           }
                           alt="Header Logo"
                        />
                     </Link>
                  </div>
                  <div className="hamburger-nav-close" onClick={closeMenu}>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>

               <div className="mobile-menubar">
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/founder">Founder</Link>
                     </li>
                     <li>
                        <Link to="/team">Team</Link>
                     </li>
                     <li>
                        <Link to="/companies">Companies</Link>
                     </li>
                     
                     <li className={`menu-item-has-children ${openDropdown === 0 ? "open" : ""}`}>
                        <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(0); }}>
                           Insights <span className="arrow">{openDropdown === 0 ? "-" : "+"}</span>
                        </a>
                        <ul className="sub-menu" style={{ display: openDropdown === 0 ? "block" : "none" }}>
                           <li>
                              <Link to="/articles">Our Articles</Link>
                           </li>
                           <li>
                              <Link to="/podcasts">Our Podcasts</Link>
                           </li>
                           <li>
                              <Link to="/videos">Our Videos</Link>
                           </li>
                        </ul>
                     </li>

                  </ul>
               </div>
            </div>
         </header>
      </>
   )
}
