import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useState, useEffect } from "react";
import parse from 'html-react-parser';
import axiosInstance from "../Auth/Axios";


export const Articles = () => {

  const [data, setData] = useState({});
  const [posts, setPost] = useState({});
  const strapi_url = import.meta.env.VITE_STRAPI_BACKEND_URL;
  const no_image_url = "src/assets/images/no_image.jpg";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance({
        url: `${import.meta.env.VITE_STRAPI_BACKEND_URL}/api/artical-page?populate[0]=Hero_Section.Right_Float_Image&populate[1]=Hero_Section.Left_Float_Image`,
        method: 'GET',
      });
      setData(response.data.data);
    }
    fetchData();

    const fetchPosts = async () => {
      const response = await axiosInstance({
        url: `${import.meta.env.VITE_STRAPI_BACKEND_URL}/api/posts-post?filters[$and][0][category][name][$eq]=article&populate=*`,
        method: 'GET',
      });
      setPost(response.data.data);
    }
    fetchPosts();
  }, [])

  return (
    <>
      <Header />

      <main>
        <section class="inner-banner-section light-bg">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="info-wraper">
                  <h1>{data?.Hero_Section?.Hero_Section_Text ? data.Hero_Section.Hero_Section_Text : ''}</h1>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="image-outer text-end position-relative">
                  <div class="man-image"><img src={data?.Hero_Section?.Right_Float_Image?.url ? (strapi_url + data.Hero_Section.Right_Float_Image.url) : no_image_url} alt="" /></div>
                  <div class="element-design banner-lightning">
                    <img src={data?.Hero_Section?.Left_Float_Image?.url ? (strapi_url + data.Hero_Section.Left_Float_Image.url) : no_image_url} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="featured-section padding-common">
          <div class="container">
            <div class="section-title">
              <h2>{data?.Featured_Article_Title ? data.Featured_Article_Title : ''}</h2>
            </div>

            {posts.length ? posts.map((x, y) => {
              if (x.Featured_Post) {
                return (
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="image-wrap image-adjustment">
                        <img src={x?.Featured_Image?.url ? (strapi_url + x.Featured_Image.url) : no_image_url} alt="" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="info-wrap">
                        <div class="date-wrap">
                          <p>{x?.createdAt ? new Date(x.createdAt).getDate() + "/" + new Date(x.createdAt).getMonth() + "/" + new Date(x.createdAt).getFullYear() : ''}</p>
                        </div>
                        <h3>{x?.Title ? x.Title : ''}</h3>
                        <p>
                          {x?.Description ? (x.Description.substring(0, 200) + "...") : ''}
                        </p>
                        <a href="#" class="button__primary"><span>Read More</span></a>
                      </div>
                    </div>
                  </div>
                )
              }
            }) : ''}

          </div>
        </section>
        <section class="card-box-section padding-common light-bg">
          <div class="container">
            <div class="card-box-outer">
              <div class="row">

                {posts.length ? posts.map((x, y) => {
                  if (! x.Featured_Post) {
                  return (
                    <div class="col-md-6 card-box-col">
                      <div class="card-box">
                        <div class="card-image image-adjustment">
                          <img src={x?.Featured_Image?.url ? (strapi_url + x.Featured_Image.url) : no_image_url} alt="" />
                        </div>
                        <div class="date-wrap">
                          <p>
                            {x?.createdAt ? new Date(x.createdAt).getDate() + "/" + new Date(x.createdAt).getMonth() + "/" + new Date(x.createdAt).getFullYear() : ''}
                          </p>
                        </div>
                        <div class="title">
                          <h3>{x?.Title ? x.Title : ''}</h3>
                        </div>
                        <div class="card-info-wrap">
                          <p>
                            {x?.Description ? (x.Description.substring(0, 200) + "...") : ''}
                          </p>
                        </div>
                        <div class="card-button">
                          <a href="#" class="button__primary"><span>Read More</span></a>
                        </div>
                      </div>
                    </div>
                  )
                }
                }) : ''}


              </div>
              <div class="button-wrap text-center">
                <a href="#" class="button__primary button__primary-fill"><span>Load More</span></a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
