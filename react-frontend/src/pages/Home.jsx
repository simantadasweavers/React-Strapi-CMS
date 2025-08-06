import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import axios from "../Auth/Axios"
import { useEffect, useState } from "react"

export const Home = () => {

    const [data, setData] = useState({});
    const URL = import.meta.env.VITE_STRAPI_BACKEND_URL;
    const No_image_url = "src/assets/images/no_image.jpg"
    useEffect(() => {
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_STRAPI_BACKEND_URL}/api/home-page?populate[0]=Hero_Section.Right_Float_Image&populate[1]=Hero_Section.Side_Left_Arrow_Image&populate[2]=Hero_Section.Slider&populate[3]=About_Section&populate[4]=Choose_Rorho_Ventures.Boxes.Box_Image&populate[5]=Process_Section.Process_Lists&populate[6]=Process_Section.Process_Boxes&populate[7]=Investments.Boxes&populate[8]=Investments.Boxes.Box_Image&populate[9]=Help_Section.Help_Boxes&populate[10]=Testimonials.Client_Reviews.Company_Logo`,
        }).then((res) => {
            setData(res.data.data);
        }).catch((err) => {
            console.error(err);
        })
    }, [])


    return (
        <>
            <Header />

    
            <main>
                <section class="hero-section padding-common light-bg">
                    <div class="container">
                        <div class="info-wraper text-center position-relative">
                            <h1>{data ? data.Hero_Section.Hero_Section_Text : ''}</h1>
                            <div class="banner-lightning"><img src={data ? URL + data.Hero_Section.Side_Left_Arrow_Image.url : ''} alt="" /></div>
                            <div class="man-image"><img src={data ? URL + data.Hero_Section.Right_Float_Image.url : ''} alt="" /></div>
                        </div>
                        <div class="slider-wraper">
                            <div class="marquee-slider">
                                <div class="slider-col">
                                    <div class="title">
                                        <p>Business</p>
                                    </div>
                                </div>
                                <div class="slider-col">
                                    <div class="title">
                                        <p>Company</p>
                                    </div>
                                </div>
                                <div class="slider-col">
                                    <div class="title">
                                        <p>Opportunity</p>
                                    </div>
                                </div>
                                <div class="slider-col">
                                    <div class="title">
                                        <p>Include</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="about-us-section padding-common pb-0" id="border-hit">
                    <div class="container">
                        <div class="about-box text-center position-relative">
                            <div class="border-design"></div>
                            <div class="border-top-design"></div>
                            <div class="about-box-inner position-relative">
                                <h2>Strategic Planning Firm For Family Offices</h2>
                                <p>At RORHRO Ventures, we specialize in strategic investments that drive growth and create lasting value. With a focus on business acquisitions, private equity, and real estate, we partner with businesses looking to transition seamlessly and thrive in the future.</p>
                                <p>Our approach combines experience, integrity, and a clear vision for success. We’re not just investors; we’re collaborators who understand the importance of long-term relationships and sustainable growth.</p>
                                <a href="#" class="button__primary"> <span>Learn More</span></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="why-Choose-section padding-common">
                    <div class="container">
                        <div class="top-row">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="title-wrap">
                                        <h2>Why Choose RORHRO Ventures?</h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="description-wrap">
                                        <p>Innovative Solutions for Real Estate and Business Investment.</p>
                                        <a href="#" class="button__primary button__primary-fill"><span>Get In Touch</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="why-Choose-box-wraper">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6 why-Choose-box-col">
                                    <div class="why-Choose-box">
                                        <div class="number-wrap">01</div>
                                        <div class="image-outer text-center">
                                            <div class="image-wrap"><img src="images/why-Choose-box-1.png" alt="" /></div>
                                        </div>
                                        <div class="why-Choose-box-title">
                                            <h3>Fair And Competitive Offers.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 why-Choose-box-col">
                                    <div class="why-Choose-box">
                                        <div class="number-wrap">02</div>
                                        <div class="image-outer text-center">
                                            <div class="image-wrap"><img src="images/why-Choose-box-2.png" alt="" /></div>
                                        </div>
                                        <div class="why-Choose-box-title">
                                            <h3>Streamlined process for business acquisition.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 why-Choose-box-col">
                                    <div class="why-Choose-box">
                                        <div class="number-wrap">03</div>
                                        <div class="image-outer text-center">
                                            <div class="image-wrap"><img src="images/why-Choose-box-3.png" alt="" /></div>
                                        </div>
                                        <div class="why-Choose-box-title">
                                            <h3>Expert team with decades of experience.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="process-section padding-common">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="info-wraper list-item">
                                    <h2>Our Process is Fast, Friendly, and Simple</h2>
                                    <ul>
                                        <li>Easy 15-day diligence process focused on what matters</li>
                                        <li>No golden handcuffs — founders can stay or go</li>
                                        <li>Straightforward all cash payments</li>
                                        <li>No in-person meetings</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="process-time-box-wraper">
                                    <div class="process-time-box d-flex flex-wrap align-items-center justify-content-between position-relative">
                                        <div class="number-wrap">01</div>
                                        <div class="status-wrap">
                                            <p>Respond in</p>
                                        </div>
                                        <div class="time-wrap">
                                            <h3>48 hours</h3>
                                        </div>
                                    </div>
                                    <div class="process-time-box d-flex flex-wrap align-items-center justify-content-between position-relative">
                                        <div class="number-wrap">02</div>
                                        <div class="status-wrap">
                                            <p>Make an offer in</p>
                                        </div>
                                        <div class="time-wrap">
                                            <h3>7 days</h3>
                                        </div>
                                    </div>
                                    <div class="process-time-box d-flex flex-wrap align-items-center justify-content-between position-relative">
                                        <div class="number-wrap">03</div>
                                        <div class="status-wrap">
                                            <p>Close the deal in</p>
                                        </div>
                                        <div class="time-wrap">
                                            <h3>1 month</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="investments-section padding-common pb-0">
                    <div class="container">
                        <div class="section title text-center mb-50">
                            <h2>Investments We've Helped Curate Include</h2>
                        </div>
                        <div class="investments-box-wraper">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6 investments-box-col">
                                    <div class="investments-box">
                                        <div class="icon-wrap"><img src="images/investments-icon-1.png" alt="" /></div>
                                        <div class="list-item">
                                            <h3>Venture Capital</h3>
                                            <ul>
                                                <li>Huge valuation</li>
                                                <li class="red-icon">3–6 month process</li>
                                                <li class="red-icon">Founders committed to 5+ years</li>
                                                <li class="red-icon">Terms could make your equity worthless</li>
                                                <li class="red-icon">Pressure to provide 10–100X returns</li>
                                                <li class="red-icon">No cash to founders, just money to grow</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 investments-box-col">
                                    <div class="investments-box">
                                        <div class="icon-wrap"><img src="images/investments-icon-2.png" alt="" /></div>
                                        <div class="list-item">
                                            <h3>Private Equity</h3>
                                            <ul>
                                                <li>Huge valuation</li>
                                                <li class="red-icon">3–6 month process</li>
                                                <li class="red-icon">Founders locked in with earnout structure</li>
                                                <li class="red-icon">Terms could make your equity worthless</li>
                                                <li class="red-icon">Intervene and change your culture</li>
                                                <li class="red-icon">Typically flip your company in 3–5 years</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 investments-box-col">
                                    <div class="investments-box">
                                        <div class="icon-wrap"><img src="images/investments-icon-3.png" alt="" /></div>
                                        <div class="list-item">
                                            <h3>RORHRO Ventures</h3>
                                            <ul>
                                                <li>Full or partial cash out</li>
                                                <li>Deal size ranging from $1M-$300M</li>
                                                <li>30-day process</li>
                                                <li>Founders can stay or go, we're flexible</li>
                                                <li>Simple structure with cash upfront</li>
                                                <li>Operate as-is with no culture change</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-row text-center">
                                <a href="#" class="button__primary"><span>Explore Work</span></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="who-we-help-section padding-common">
                    <div class="container">
                        <div class="top-row mb-50">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="title-wrap">
                                        <h2>Who We Help?</h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="description-wrap">
                                        <p>We assist companies, entrepreneurs, and investors by providing strategic investment opportunities in private equity, real estate, and innovative businesses. Our expertise helps drive growth and maximize value across diverse industries.</p>
                                        <a href="#" class="button__primary button__primary-fill"><span>Get In Touch</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="help-box-wraper">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 col-sm-6 help-box-col">
                                    <div class="help-box">
                                        <div class="title-wrap">
                                            <div class="number"><p>01</p></div>
                                            <h3>High <br /> margins</h3>
                                        </div>
                                        <div class="description-wrap">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6 help-box-col">
                                    <div class="help-box">
                                        <div class="title-wrap">
                                            <div class="number"><p>02</p></div>
                                            <h3>A unique advantage</h3>
                                        </div>
                                        <div class="description-wrap">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6 help-box-col">
                                    <div class="help-box">
                                        <div class="title-wrap">
                                            <div class="number"><p>03</p></div>
                                            <h3>A simple business model</h3>
                                        </div>
                                        <div class="description-wrap">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6 help-box-col">
                                    <div class="help-box">
                                        <div class="title-wrap">
                                            <div class="number"><p>04</p></div>
                                            <h3>Healthy <br /> Profit</h3>
                                        </div>
                                        <div class="description-wrap">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6 help-box-col">
                                    <div class="help-box">
                                        <div class="title-wrap">
                                            <div class="number"><p>05</p></div>
                                            <h3>Successful operations</h3>
                                        </div>
                                        <div class="description-wrap">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6 help-box-col">
                                    <div class="help-box">
                                        <div class="title-wrap">
                                            <div class="number"><p>06</p></div>
                                            <h3>A high-quality team</h3>
                                        </div>
                                        <div class="description-wrap">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6 help-box-col">
                                    <div class="help-box">
                                        <div class="title-wrap">
                                            <div class="number"><p>07</p></div>
                                            <h3>A positive and ethical approach</h3>
                                        </div>
                                        <div class="description-wrap">
                                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="testimonial-section padding-common light-bg">
                    <div class="container">
                        <div class="title-wraper mb-50">
                            <h2>Already Adopted by Many Companies</h2>
                        </div>
                        <div class="testimonial-row d-flex flex-wrap">
                            <div class="arrow-wrap d-flex">
                                <div class="slider-prev-button"></div>
                                <div class="slider-next-button"></div>
                            </div>
                            <div class="testimonial-slider-wraper">
                                <div class="testimonial-slider">
                                    <div class="slider-col">
                                        <div class="testimonial-box">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="review-wraper">
                                                        <div class="logo-wrap"><img src="images/company-logo.svg" alt="" /></div>
                                                        <div class="profile-info">
                                                            <h3>Pádraig Ó Cinnéide</h3>
                                                            <p>Founder of Castro</p>
                                                        </div>
                                                        <p>NY Design Agency is the best agency I've worked with. Their team is talented, creative, and responsive. They delivered an outstanding product that exceeded my expectations. I highly recommend their services.</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="image-wraper image-adjustment"><img src="images/testimonial-slider.jpg" alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slider-col">
                                        <div class="testimonial-box">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="review-wraper">
                                                        <div class="logo-wrap"><img src="images/company-logo.svg" alt="" /></div>
                                                        <div class="profile-info">
                                                            <h3>Pádraig Ó Cinnéide</h3>
                                                            <p>Founder of Castro</p>
                                                        </div>
                                                        <p>NY Design Agency is the best agency I've worked with. Their team is talented, creative, and responsive. They delivered an outstanding product that exceeded my expectations. I highly recommend their services.</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="image-wraper image-adjustment"><img src="images/testimonial-slider.jpg" alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slider-col">
                                        <div class="testimonial-box">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="review-wraper">
                                                        <div class="logo-wrap"><img src="images/company-logo.svg" alt="" /></div>
                                                        <div class="profile-info">
                                                            <h3>Pádraig Ó Cinnéide</h3>
                                                            <p>Founder of Castro</p>
                                                        </div>
                                                        <p>NY Design Agency is the best agency I've worked with. Their team is talented, creative, and responsive. They delivered an outstanding product that exceeded my expectations. I highly recommend their services.</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="image-wraper image-adjustment"><img src="images/testimonial-slider.jpg" alt="" /></div>
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
