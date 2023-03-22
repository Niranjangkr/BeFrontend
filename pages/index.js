/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Drawer from "../Components/Drawer";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.scss";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Icon } from "@iconify/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Navigation, Pagination } from "swiper";

export default function Home() {
  const [currentpage, setCurrentpage] = useState("/");
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname, "name");
    setCurrentpage(router.pathname);
  }, [router]);
  return (
    <div className={styles.main}>
      <div className={styles.descboxes}>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="mdi:account-school-outline"
                width={"4rem"}
                onClick={() => {
                  router.push("Analytics");
                }}
              />
            </div>
          </div>
          <p className={styles.head}>Total Students</p>
          <p className={styles.p}>1600</p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="mdi:handshake"
                width={"4rem"}
                onClick={() => {
                  router.push("Placed");
                }}
              />
            </div>
          </div>
          <p className={styles.head}>Students Placed</p>
          <p className={styles.p}>160/1600</p>
        </div>
        <div className={styles.box}>
          <div className={styles.mainicon}>
            <div className={styles.icon}>
              <Icon
                icon="ri:building-2-line"
                width={"4rem"}
                onClick={() => {
                  router.push("Archive");
                }}
              />
            </div>
          </div>
          <p className={styles.head}>Company Arrived</p>
          <p className={styles.p}>1600</p>
        </div>
      </div>
      <div className={styles.mainCon1}>
        <div className={styles.company1box}>
          <div className={styles.carobox}>
            <div className={styles.Carouselh1Box}>
              <h1 className={styles.h1}>On-Going Companies</h1>
            </div>
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.card}>
                    <img
                      alt=""
                      src={"/Infosys_logo.svg.png"}
                      className={styles.img}
                    ></img>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.card}>
                    <img
                      alt=""
                      src={"/Infosys_logo.svg.png"}
                      className={styles.img}
                    ></img>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.card}>
                    <img
                      alt=""
                      src={"/Infosys_logo.svg.png"}
                      className={styles.img}
                    ></img>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.card}>
                    <img
                      alt=""
                      src={"/Infosys_logo.svg.png"}
                      className={styles.img}
                    ></img>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card1box}>
                  <div className={styles.card}>
                    <img
                      alt=""
                      src={"/Infosys_logo.svg.png"}
                      className={styles.img}
                    ></img>
                    <h1>Infosys</h1>
                    <p className={styles.p}>
                      Nov 5, 2022 at 9.30 <br /> CGPA-8 <br />
                      8-9Lk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
