import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import axiosInstance from "../Auth/Axios";
import { Link } from "react-router-dom";

export const Companies = () => {
  return (
    <>
      <Header />

      <main>
        <section className="inner-banner-section light-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="info-wraper">
                  <h1>Companies</h1>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="image-outer text-end position-relative">
                  <div className="man-image">
                    <img src="images/companies-banner.png" alt="" />
                  </div>
                  <div className="element-design banner-lightning">
                    <img src="images/banner-lightning-left.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="company-section padding-common">
          <div className="container">
            <div className="top-row mb-50">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="title-wrap">
                    <h2>Driving Success for Businesses</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="desc-wrap">
                    <p>
                      Innovative Solutions for Real Estate and Business Investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-box-outer">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 company-box-col">
                  <div className="company-box position-relative">
                    <div className="company-box-inner position-relative">
                      <div className="icon-outer mb-50">
                        <div className="icon">
                          <img src="images/company-1.svg" alt="" />
                        </div>
                      </div>
                      <div className="company-title">
                        <h3>Lotus Domaine Fund III LP</h3>
                      </div>
                      <div className="company-description">
                        <p>
                          Opportunistic Buyout Fund focused on growth opportunities
                          within Enterprise Software
                        </p>
                      </div>
                      <div className="company-button">
                        <a href="#" className="button__primary">
                          <span>Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 company-box-col">
                  <div className="company-box position-relative">
                    <div className="company-box-inner position-relative">
                      <div className="icon-outer mb-50">
                        <div className="icon">
                          <img src="images/company-2.svg" alt="" />
                        </div>
                      </div>
                      <div className="company-title">
                        <h3>Ecliptic Capital </h3>
                      </div>
                      <div className="company-description">
                        <p>
                          Seasoned operators. Active engagement. Full transparency.
                          Institutional investors.
                        </p>
                      </div>
                      <div className="company-button">
                        <a href="#" className="button__primary">
                          <span>Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 company-box-col">
                  <div className="company-box position-relative">
                    <div className="company-box-inner position-relative">
                      <div className="icon-outer mb-50">
                        <div className="icon">
                          <img src="images/company-3.svg" alt="" />
                        </div>
                      </div>
                      <div className="company-title">
                        <h3>Bedrock</h3>
                      </div>
                      <div className="company-description">
                        <p>In search of narrative violations</p>
                      </div>
                      <div className="company-button">
                        <a href="#" className="button__primary">
                          <span>Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 company-box-col">
                  <div className="company-box position-relative">
                    <div className="company-box-inner position-relative">
                      <div className="icon-outer mb-50">
                        <div className="icon">
                          <img src="images/company-4.svg" alt="" />
                        </div>
                      </div>
                      <div className="company-title">
                        <h3>UTXO Management </h3>
                      </div>
                      <div className="company-description">
                        <p>
                          We're thesis-driven, high conviction investors leveraging
                          our decades of expertise in the Bitcoin ecosystem.
                        </p>
                      </div>
                      <div className="company-button">
                        <a href="#" className="button__primary">
                          <span>Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 company-box-col">
                  <div className="company-box position-relative">
                    <div className="company-box-inner position-relative">
                      <div className="icon-outer mb-50">
                        <div className="icon">
                          <img src="images/company-5.svg" alt="" />
                        </div>
                      </div>
                      <div className="company-title">
                        <h3>HealthQuest Capital</h3>
                      </div>
                      <div className="company-description">
                        <p>
                          Providing growth capital to companies transforming
                          healthcare
                        </p>
                      </div>
                      <div className="company-button">
                        <a href="#" className="button__primary">
                          <span>Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 company-box-col">
                  <div className="company-box position-relative">
                    <div className="company-box-inner position-relative">
                      <div className="icon-outer mb-50">
                        <div className="icon">
                          <img src="images/company-6.svg" alt="" />
                        </div>
                      </div>
                      <div className="company-title">
                        <h3>Springdale Ventures</h3>
                      </div>
                      <div className="company-description">
                        <p>
                          We partner with visionary founders to accelerate the growth
                          of transformative consumer brands.
                        </p>
                      </div>
                      <div className="company-button">
                        <a href="#" className="button__primary">
                          <span>Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 company-box-col">
                  <div className="company-box position-relative">
                    <div className="company-box-inner position-relative">
                      <div className="icon-outer mb-50">
                        <div className="icon">
                          <img src="images/company-7.svg" alt="" />
                        </div>
                      </div>
                      <div className="company-title">
                        <h3>Venturi</h3>
                      </div>
                      <div className="company-description">
                        <p>Allocate is modernizing the private markets.</p>
                      </div>
                      <div className="company-button">
                        <a href="#" className="button__primary">
                          <span>Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 company-box-col">
                  <div className="company-box position-relative">
                    <div className="company-box-inner position-relative">
                      <div className="icon-outer mb-50">
                        <div className="icon">
                          <img src="images/company-8.svg" alt="" />
                        </div>
                      </div>
                      <div className="company-title">
                        <h3>Allocate</h3>
                      </div>
                      <div className="company-description">
                        <p>
                          Opportunistic Buyout Fund focused on growth opportunities
                          within Enterprise Software
                        </p>
                      </div>
                      <div className="company-button">
                        <a href="#" className="button__primary">
                          <span>Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 company-box-col">
                  <div className="company-box position-relative">
                    <div className="company-box-inner position-relative">
                      <div className="icon-outer mb-50">
                        <div className="icon">
                          <img src="images/company-9.svg" alt="" />
                        </div>
                      </div>
                      <div className="company-title">
                        <h3>Enduring Ventures</h3>
                      </div>
                      <div className="company-description">
                        <p>
                          Opportunistic Buyout Fund focused on growth opportunities
                          within Enterprise Software
                        </p>
                      </div>
                      <div className="company-button">
                        <a href="#" className="button__primary">
                          <span>Visit Website</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="load-more-button-wrap text-center">
                <a href="#" className="button__primary button__primary-fill">
                  <span>Load More</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>


      <Footer />
    </>
  )
}
