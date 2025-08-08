import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import axios from "../Auth/Axios";


export const Founder = () => {
  return (
    <>
      <Header />

      <main>
        <section className="inner-banner-section light-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="info-wraper">
                  <h1>Our Founder, Dr. Tony Jacob </h1>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-outer text-end position-relative">
                  <div className="man-image"><img src="images/about-us-banner.png" alt /></div>
                  <div className="element-design banner-lightning">
                    <img src="images/banner-lightning-left.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-about-section padding-common">
          <div className="container">
            <div className="box-design">
              <div className="arrow-wrap">
                <div className="down-arrow right-down-arrow"><img src="images/down-arrow.png" alt /></div>
                <div className="down-arrow left-down-arrow"><img src="images/down-arrow-right.png" alt /></div>
              </div>
              <div className="team-about-box text-center">
                <div className="image-wraper"><img src="images/profile.jpg" alt /></div>
                <div className="profile-wrap">
                  <p>Meet Our founder,</p>
                  <h2>About Tony</h2>
                </div>
                <div className="profile-description">
                  <p>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-tab-section padding-common light-bg">
          <div className="container">
            <div className="tab-wraper">
              <div className="tab-button-wrap mb-50">
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="Articles-tab" data-bs-toggle="tab" data-bs-target="#Articles-tab-pane" type="button" role="tab" aria-controls="Articles-tab-pane" aria-selected="true">Articles</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="Podcasts-tab" data-bs-toggle="tab" data-bs-target="#Podcasts-tab-pane" type="button" role="tab" aria-controls="Podcasts-tab-pane" aria-selected="false">Podcasts</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="Videos-tab" data-bs-toggle="tab" data-bs-target="#Videos-tab-pane" type="button" role="tab" aria-controls="Videos-tab-pane" aria-selected="false">Videos</button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="Articles-tab-pane" role="tabpanel" aria-labelledby="Articles-tab" tabIndex={0}>
                  <div className="tab-slider-wraper">
                    <div className="tab-title text-center mb-50">
                      <h2>Tony’s Latest Articles</h2>
                    </div>
                    <div className="team-tab-slider">
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-1.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Turning Dreams into Reality</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-2.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Navigating the Challenges of Modern</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-3.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Inside the World of Ventures</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-1.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Turning Dreams into Reality</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Podcasts-tab-pane" role="tabpanel" aria-labelledby="Podcasts-tab" tabIndex={0}>
                  <div className="tab-slider-wraper">
                    <div className="tab-title text-center mb-50">
                      <h2>Tony’s Latest Podcasts</h2>
                    </div>
                    <div className="team-tab-slider">
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-1.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Turning Dreams into Reality</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-2.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Navigating the Challenges of Modern</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-3.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Inside the World of Ventures</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-1.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Turning Dreams into Reality</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Videos-tab-pane" role="tabpanel" aria-labelledby="Videos-tab" tabIndex={0}>
                  <div className="tab-slider-wraper">
                    <div className="tab-title text-center mb-50">
                      <h2>Tony’s Latest Videos</h2>
                    </div>
                    <div className="team-tab-slider">
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-video card-image image-adjustment">
                            <video controls>
                              <source src="video/mov_bbb.mp4" type="video/mp4" />
                              <source src="video/mov_bbb.mp4" type="video/ogg" />
                            </video>
                          </div>
                          <div className="card-title mb-50">
                            <h3>Turning Dreams into Reality</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-2.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Navigating the Challenges of Modern</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-video card-image image-adjustment">
                            <video controls>
                              <source src="video/mov_bbb.mp4" type="video/mp4" />
                              <source src="video/mov_bbb.mp4" type="video/ogg" />
                            </video>
                          </div>
                          <div className="card-title mb-50">
                            <h3>Inside the World of Ventures</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                      <div className="slider-col">
                        <div className="card-box">
                          <div className="card-image image-adjustment"><img src="images/articles-1.jpg" alt /></div>
                          <div className="card-title mb-50">
                            <h3>Turning Dreams into Reality</h3>
                          </div>
                          <div className="card-info">
                            <p>Opportunistic Buyout Fund focused on growth opportunities...</p>
                          </div>
                          <div className="card-button">
                            <a href="#" className="button__primary"><span>Read More</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
