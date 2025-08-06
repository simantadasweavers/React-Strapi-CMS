import { useEffect } from "react"

export const Header = () => {

  const loggedIn = localStorage.getItem('access_token');

  return (
    <>
        <header class="header__main">
         <div class="header-inner__wrapper">
            <div class="container">
               <div class="header-row d-flex align-items-center justify-content-between">
                  <div class="logo-wrap"><a href="index.html"><img src="src/assets/images/site-logo.svg" alt="" /></a></div>
                  <div class="desktop-menu">
                     <ul class="nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Founder</a></li>
                        <li><a href="#">Team</a></li>
                        {/* <li class="current-menu-item"><a href="#">Companies</a></li> */}
                        <li><a href="#">Companies</a></li>
                        <li class="menu-item-has-children">
                           <a href="#">Insights</a>
                           <ul class="sub-menu">
                              <li><a href="#">Our Articles</a></li>
                              <li><a href="#">Our Podcasts</a></li>
                              <li><a href="#">Our Videos</a></li>
                           </ul>
                        </li>
                     </ul>
                  </div>
                  <div class="right-col d-flex align-items-center">
                     <div class="buttom-wrap">
                        <a href="#" class="button__primary"><span>Contact Us</span></a>
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
               <div class="logo-wrap"><a href="#"><img src="images/site-logo-white.svg" alt="" /></a></div>
               <div class="hamburger-nav-close">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </div>
            <div class="mobile-menubar">
               <ul>
                  <li class="current-menu-item"><a href="#">Home</a></li>
                  <li><a href="#">Founder</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Companies</a></li>
                  <li class="menu-item-has-children">
                     <a href="#">Insights</a>
                     <ul class="sub-menu">
                        <li><a href="#">Our Articles</a></li>
                        <li><a href="#">Our Podcasts</a></li>
                        <li><a href="#">Our Videos</a></li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </header>

    </>
  )
}
