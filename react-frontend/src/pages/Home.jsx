import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import axios from "../Auth/Axios"
import { useEffect, useState } from "react"
import parse from 'html-react-parser';


export const Home = () => {

    const [data, setData] = useState({});
    const strapi_url = import.meta.env.VITE_STRAPI_BACKEND_URL;
    const no_image_url = "src/assets/images/no_image.jpg";
    let count = 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({ method: 'GET', url: `${import.meta.env.VITE_STRAPI_BACKEND_URL}/api/home-page?populate[0]=Hero_Section.Right_Float_Image&populate[1]=Hero_Section.Side_Left_Arrow_Image&populate[2]=Hero_Section.Slider&populate[3]=About_Section&populate[4]=Choose_Rorho_Ventures.Boxes.Box_Image&populate[5]=Process_Section.Process_Lists&populate[6]=Process_Section.Process_Boxes&populate[7]=Investments.Boxes&populate[8]=Investments.Boxes.Box_Image&populate[9]=Investments.Boxes.Positive_List&populate[10]=Investments.Boxes.Negative_List&populate[11]=Help_Section.Help_Boxes&populate[12]=Testimonials.Client_Reviews.Company_Logo&populate[13]=Testimonials.Client_Reviews.Client_Profile`, });
                setData(response.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                console.warn("Loading...");
            }
        }
        fetchData();
    }, [])



    return (
        <>
            <Header />


            <main>
                <section class="hero-section padding-common light-bg">
                    <div class="container">
                        <div class="info-wraper text-center position-relative">
                            <h1>{data?.Hero_Section?.Hero_Section_Text ? parse(data.Hero_Section.Hero_Section_Text) : ''}</h1>
                            <div class="banner-lightning"><img src={data?.Hero_Section?.Side_Left_Arrow_Image?.url ? strapi_url + data.Hero_Section.Side_Left_Arrow_Image.url : no_image_url} alt="" /></div>
                            <div class="man-image"><img src={data?.Hero_Section?.Right_Float_Image?.url ? strapi_url + data.Hero_Section.Right_Float_Image.url : no_image_url} alt="" /></div>
                        </div>
                    </div>
                    {data?.Hero_Section?.Slider ? data.Hero_Section.Slider.map((x, y) => {
                        return (
                            <>
                                <div className="slider-wraper" key={"slide-" + x.id}>
                                    <div className="marquee-slider">
                                        <div className="slider-col">
                                            <div className="title">
                                                <p>{parse(x.Text)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    }) : ''}
                </section>
                <section class="about-us-section padding-common pb-0" id="border-hit">
                    <div class="container">
                        <div class="about-box text-center position-relative">
                            <div class="border-design"></div>
                            <div class="border-top-design"></div>
                            <div class="about-box-inner position-relative">
                                <h2>{data?.About_Section?.Section_Title ? parse(data.About_Section.Section_Title) : ''}</h2>
                                <p>{data?.About_Section?.Description ? parse(data.About_Section.Description) : ''}</p>
                                <a href={data?.About_Section?.Button_Link ? parse(data.About_Section.Button_Link) : ''} class="button__primary"> <span>
                                    {data?.About_Section?.Button_Title ? parse(data.About_Section.Button_Title) : ''}
                                </span></a>
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
                                        <h2>{data?.Choose_Rorho_Ventures?.Section_Title ? parse(data.Choose_Rorho_Ventures.Section_Title) : ''}</h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="description-wrap">
                                        <p>{data?.Choose_Rorho_Ventures?.Short_Description ? parse(data.Choose_Rorho_Ventures.Short_Description) : ''}</p>
                                        <a href={data?.Choose_Rorho_Ventures?.Button_Url ? parse(data.Choose_Rorho_Ventures.Button_Url) : ''} class="button__primary button__primary-fill"><span>{data?.Choose_Rorho_Ventures?.Button_Title ? parse(data.Choose_Rorho_Ventures.Button_Title) : ''}</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="why-Choose-box-wraper">
                            <div class="row justify-content-center">
                                {data?.Choose_Rorho_Ventures?.Boxes ? data.Choose_Rorho_Ventures.Boxes.map((x, y) => {
                                    return (
                                        <div class="col-lg-4 col-md-6 why-Choose-box-col" key={"box-" + y}>
                                            <div class="why-Choose-box">
                                                <div class="number-wrap">0{y + 1}</div>
                                                <div class="image-outer text-center">
                                                    <div class="image-wrap"><img src={strapi_url + x.Box_Image.url} alt="" /></div>
                                                </div>
                                                <div class="why-Choose-box-title">
                                                    <h3>{x?.Box_Text ? parse(x.Box_Text) : ''}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : ''}
                            </div>
                        </div>
                    </div>
                </section>
                <section class="process-section padding-common">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="info-wraper list-item">
                                    <h2>{data?.Process_Section?.Section_Title ? parse(data.Process_Section.Section_Title) : ''}</h2>
                                    <ul>
                                        {data?.Process_Section?.Process_Lists ? data.Process_Section.Process_Lists.map((x, y) => {
                                            return (
                                                <li key={"lis-" + y}>{parse(x.List_Item)}</li>
                                            )
                                        }) : ''}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="process-time-box-wraper">
                                    {data?.Process_Section?.Process_Boxes ? data.Process_Section.Process_Boxes.map((x, y) => {
                                        return (
                                            <div class="process-time-box d-flex flex-wrap align-items-center justify-content-between position-relative" key={"process-" + y}>
                                                <div class="number-wrap">0{y + 1}</div>
                                                <div class="status-wrap">
                                                    <p>{parse(x.Box_Text)}</p>
                                                </div>
                                                <div class="time-wrap">
                                                    <h3>{parse(x.Box_Time)}</h3>
                                                </div>
                                            </div>
                                        )
                                    }) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="investments-section padding-common pb-0">
                    <div class="container">
                        <div class="section title text-center mb-50">
                            <h2>{data?.Investments?.Section_Title ? parse(data.Investments.Section_Title) : ''}</h2>
                        </div>
                        <div class="investments-box-wraper">
                            <div class="row justify-content-center">
                                {data?.Investments?.Boxes ? data.Investments.Boxes.map((x, y) => {
                                    return (
                                        <div class="col-lg-4 col-md-6 investments-box-col" key={"invest-" + y}>
                                            <div class="investments-box">
                                                <div class="icon-wrap"><img src={strapi_url + x.Box_Image.url} alt="" /></div>
                                                <div class="list-item">
                                                    <h3>{parse(x.Box_Title)}</h3>
                                                    <ul>
                                                        {x?.Positive_List ? x.Positive_List.map((x, y) => {
                                                            return (
                                                                <li key={"pos-item-" + y}>{x.List_Item}</li>
                                                            )
                                                        }) : ''}
                                                        {x?.Positive_List ? x.Negative_List.map((x, y) => {
                                                            return (
                                                                <li key={"pos-item-" + y} class="red-icon">{x.List_Item}</li>
                                                            )
                                                        }) : ''}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : ''}


                            </div>
                            <div class="button-row text-center">
                                <a href={data?.Investments?.Button_Url ? parse(data.Investments.Button_Url) : ''} class="button__primary"><span>{data?.Investments?.Button_Title ? parse(data.Investments.Button_Title) : ''}</span></a>
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
                                        <h2>{data?.Help_Section?.Section_Title ? parse(data.Help_Section.Section_Title) : ''}</h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="description-wrap">
                                        <p>{data?.Help_Section?.Description ? parse(data.Help_Section.Description) : ''}</p>
                                        <a href={data?.Help_Section?.Button_Link ? parse(data.Help_Section.Button_Link) : ''} class="button__primary button__primary-fill"><span>{data?.Help_Section?.Button_Title ? parse(data.Help_Section.Button_Title) : ''}</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="help-box-wraper">
                            <div class="row">
                                {data?.Help_Section?.Help_Boxes ? data.Help_Section.Help_Boxes.map((x, y) => {
                                    return (
                                        <div class="col-lg-3 col-md-4 col-sm-6 help-box-col" >
                                            <div class="help-box">
                                                <div class="title-wrap">
                                                    <div class="number"><p>0{y + 1}</p></div>
                                                    <h3>{x?.Box_Title ? parse(x.Box_Title) : ''}</h3>
                                                </div>
                                                <div class="description-wrap">
                                                    <p>{x?.Short_Description ? parse(x.Short_Description) : ''}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : ''}

                            </div>
                        </div>
                    </div>
                </section>
                <section class="testimonial-section padding-common light-bg">
                    <div class="container">
                        <div class="title-wraper mb-50">
                            <h2>{data?.Testimonials?.Section_Title ? parse(data.Testimonials.Section_Title) : ''}</h2>
                        </div>
                        <div class="testimonial-row d-flex flex-wrap">
                            <div class="arrow-wrap d-flex">
                                <div class="slider-prev-button"></div>
                                <div class="slider-next-button"></div>
                            </div>
                            <div class="testimonial-slider-wraper">
                                <div class="testimonial-slider">
                                    {data?.Testimonials?.Client_Reviews ? data.Testimonials.Client_Reviews.map((x, y) => {
                                        return (
                                            <div class="slider-col">
                                                <div class="testimonial-box">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="review-wraper">
                                                                <div class="logo-wrap"><img src={x?.Company_Logo?.url ? strapi_url+x.Company_Logo.url : no_image_url} alt="" /></div>
                                                                <div class="profile-info">
                                                                    <h3>{x?.Client ? parse(x.Client) : ''}</h3>
                                                                    <p>{x?.Client_Designation ? parse(x.Client_Designation) : ''}</p>
                                                                </div>
                                                                <p>{x?.Feedback ? parse(x.Feedback) : ''}</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="image-wraper image-adjustment"><img src={x?.Client_Profile?.url ? strapi_url+x.Client_Profile.url : no_image_url} alt="" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    }) : ''}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >

            <Footer />
        </>
    )
}
