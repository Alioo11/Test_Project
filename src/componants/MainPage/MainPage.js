import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./../subscriptions/NavBar";
import "./MainPage.css";
import doctor from "./../../asset&fonts/img/doctor.svg";
import doctorWithBackground from "./../../asset&fonts/img/Doctor-with-background.svg";
import app_prev from "./../../asset&fonts/img/app-prev.svg";
import verify from "./../../asset&fonts/img/verify.svg";
import time from "./../../asset&fonts/img/time.svg";
import support from "./../../asset&fonts/img/support.svg";
import search from "./../../asset&fonts/img/search.svg";
import shop from "./../../asset&fonts/img/shop.svg";
import pharmacy from "./../../asset&fonts/img/pharmacy.svg";
import doctor_toys from "./../../asset&fonts/img/doctor-toys.svg";
import calender from "./../../asset&fonts/img/calender.svg";
import arrow from "./../../asset&fonts/img/arrow.svg";
import check from "./../../asset&fonts/img/check.svg";
import cloud_right from "./../../asset&fonts/img/cloud-right.svg";
import Path15753 from "./../../asset&fonts/img/Path 15753.svg";
import bazar from "./../../asset&fonts/img/bazar.svg";
import sibapp from "./../../asset&fonts/img/sibapp.svg";
import android from "./../../asset&fonts/img/android.svg";

import subscribe_img from "./../../asset&fonts/img/subscribe-img.svg";
import Footer from "./../subscriptions/Footer";

function MainPage() {
  return (
    <div>
      <NavBar />
      <div className='section intro'>
        <div className='doctor-container intro-child'>
          <img className='doc with-back' src={doctorWithBackground} />
          <img className='doc without-back' src={doctor} alt='' />
        </div>
        <div className='content-box intro-child'>
          <h1>اپلیکیشن درمانیو </h1>
          <h3>درمانیتو، سامانه هوشمند درمان و سلامت </h3>
          <div className='btn-box'>
            <button className='btn btn-download download'>
              دانلود درمانیتو
            </button>
            <Link to='register'>
              <button className='btn med-stor-join'>عضویت داروخانه ها</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='about-darmanito-container '>
          <div className='about-darmanito-container-child'>
            <div className='app-prev-container'>
              <img src={app_prev} />
            </div>
          </div>
          <div className=' about-darmanito-content-box  about-darmanito-container-child'>
            <h2 className='heading-title'>درباره درمانیتو </h2>
            <p>
              درمانیتو یک سامانه است که امکان سفارش دارو، محصولات آرایشی بهداشتی
              نوبت گیری و مشاوره پزشکان را به راحتی و بصورت آنلاین فراهم کرده
              است
            </p>
            <div className='about-darmanito-des'>
              <div className='about-darmanito-logobox'>
                <div className='shadow'>
                  <img src={verify} alt='' />
                </div>
                <p> جستجو سریع</p>
              </div>
              <div className='about-darmanito-logobox'>
                <div className='shadow'>
                  <img src={time} alt='' />
                </div>
                <p> به صرفه</p>
              </div>
              <div className='about-darmanito-logobox'>
                <div className='shadow'>
                  <img src={support} alt='' />
                </div>
                <p> راحت </p>
              </div>
              <div className='about-darmanito-logobox'>
                <div className='shadow'>
                  <img src={search} alt='' />
                </div>
                <p> جستجو سریع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' facilities-darmanito'>
        <div className='facilities-darmanito-child'>
          <h2 className='heading-title'>امکانات درمانیتو</h2>
          <div className=' facilities-icon-box '>
            <div className='shadow facilities-icon'>
              <div>
                <img src={pharmacy} alt='' />
                دارو خانه
              </div>
            </div>
            <div className='shadow facilities-icon deactive'>
              <div>
                <img src={shop} alt='' />
                فروشگاه
              </div>
            </div>
            <div className='shadow facilities-icon deactive'>
              <div>
                <img src={doctor_toys} alt='' />
                ویزیت آنلاین
              </div>
            </div>
            <div className='shadow facilities-icon deactive'>
              <div>
                <img src={calender} alt='' />
                نوبت دهی آنلاین
              </div>
            </div>
          </div>
        </div>
        <div className='facilities-darmanito-child'>
          <h2>داروخانه آنلاین</h2>
          <p>
            در سرویس داروخانه شما میتوانید نسخه دارویی یا محصول بهداشتی خودتون
            رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید{" "}
          </p>
          <div className='step-by-step'>
            <div className='step-by-step-arrow'>
              <div className='arrow'>
                <img src={arrow} alt='' />
              </div>
              <div className='vl'></div>
              <div className='arrow'>
                <img src={arrow} alt='' />
              </div>
              <div className='vl'></div>
              <div className='check'>
                <img src={check} alt='' />
              </div>
            </div>

            <div className='step-by-step-textbox'>
              <h3>قدم اول</h3>
              <p>
                وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید
              </p>
              <h3>قدم دوم</h3>
              <p>
                وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید
              </p>
              <h3>قدم سوم</h3>
              <p>
                وارد بخش سفارش با عکس نسخه شوید و عکس و توضیحات را وارد کنید
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='section app-download'>
        <div className='app-download-container '>
          <div>
            <h2>دانلود اپلیکیشن درمانیتو</h2>
            <p>
              شما میتونید شماره خودتون یا دوست خودتون رو وارد کنید تا لینک
              دانلود پیامک بشه
            </p>
            <div className='app-download-inputfield'>
              <button> بفرست </button>
              <input
                type='text'
                placeholder='0912 61 36 900 شماره همراه را وارد کنید'
              />
            </div>
            <div className='download-section '>
              <img src={android} />
              <img src={sibapp} />
              <img src={bazar} />
            </div>
          </div>
          <div>
            <img src={app_prev} />
          </div>
        </div>
      </div>
      <div className='section '>
        <div className='reg-medstore'>
          <div className='reg-medstore-container shadow'>
            <div>
              <img src={subscribe_img} alt='' />
            </div>
            <div>
              <h2 className='heading-title'>عضویت داروخانه یا مراکز درمانی</h2>
              <p>
                اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان و
                کسب کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست
              </p>
              <div className='inpfield'>
                <input
                  placeholder='شماره همراه را وارد کنید '
                  type='text'
                  name=''
                  id=''
                />
                <button className='btn'>ثبت نام سریع</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
