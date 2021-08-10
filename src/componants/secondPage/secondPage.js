import React from "react";
import "./SecondPage.css";
import NavBar from "./../subscriptions/NavBar";
import person_icon from "./../../asset&fonts/img/person-icon.svg";
import map_marker from "./../../asset&fonts/img/map-marker.svg";
import Left_circle from "./../../asset&fonts/img/left-circle.svg";
import Right_circle from "./../../asset&fonts/img/right-cricle.svg";
import store_sub from "./../../asset&fonts/img/store-subcribe-page.svg";
import drug from "./../../asset&fonts/img/drug.svg";
import Footer from "./../subscriptions/Footer";

function secondPage() {
  return (
    <div>
      <NavBar />
      <div className='section'>
        <div className='make-your-medstore-container'>
          <div>
            <div>
              <h1>شما هم در سلامت و بهبود مردم کشورمون موثر باشید</h1>
              <p>
                با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شما هم به
                سیستم درمان کمک کنید و به هزاران کاربر خدمات ارائه بدین و روزانه
                درآمد سفارش های خودتون رو تسویه کنید
              </p>
            </div>

            <div>
              <div className='quick-register'>
                <button className='btn'> ثبت نام سریع </button>
                <input
                  type='text'
                  name=''
                  placeholder='شماره همراه را وارد کنید '
                />
              </div>
            </div>
          </div>{" "}
          <div>
            <div className='reg-medstor-card shadow reg-card-1'>
              <div>
                <img src={person_icon} />
              </div>
              <div>
                <h2>نام داروخانه شما</h2>
                <div className='reg-medstor-card-des'>
                  <img src={map_marker} alt='' />
                  درمانیتو ، سرویس داروخانه ، داروخانه شما
                </div>
              </div>
            </div>
            <div className='reg-medstor-card shadow reg-card-2'>
              <div>
                <img src={person_icon} />
              </div>
              <div>
                <h2>نام داروخانه شما</h2>
                <div className='reg-medstor-card-des'>
                  <img src={map_marker} alt='' />
                  درمانیتو ، سرویس داروخانه ، داروخانه شما
                </div>
              </div>
            </div>
            <div className='reg-medstor-card shadow reg-card-3'>
              <div>
                <img src={person_icon} />
              </div>
              <div>
                <h2>نام داروخانه شما</h2>
                <div className='reg-medstor-card-des'>
                  <img src={map_marker} alt='' />
                  درمانیتو ، سرویس داروخانه ، داروخانه شما
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section statics'>
        <img className='left-circle' src={Left_circle} alt='' />
        <img className='right-circle' src={Right_circle} alt='' />
        <section>
          تعداد داروخانه و مراکز
          <h1>+ 120,000</h1>
        </section>
        <section>
          تعداد داروخانه و مراکز
          <h1>+ 120,000</h1>
        </section>
        <section>
          تعداد کاربران درمانیتو <h1>+ 120,000</h1>
        </section>
      </div>

      <div className='section our-services'>
        <div className='our-service-head'>
          <h2 className='heading-title'>
            در درمانیتو چه خدمات ارائه خواهید داد؟
          </h2>
          <p>خدمت مورد نظر خود را برای ثبت نام انتخاب کنید</p>
        </div>
        <div className=''>
          <div className='card shadow'>
            {" "}
            <img src={store_sub} alt='' />
            <h2>فروشگاه آرایشی و بهداشتی</h2>
            <p>
              مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو
              با عکس نسخه به بیماران کمک رسانی کنم{" "}
            </p>
            <button className='btn'>ثبت نام </button>
          </div>
        </div>
        <div>
          <div className='card shadow'>
            {" "}
            <img src={drug} alt='' />
            <h2> داروخانه </h2>
            <p>
              مایل هستم فقط بعنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو
              با عکس نسخه به بیماران کمک رسانی کنم{" "}
            </p>
            <button className='btn'>ثبت نام </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default secondPage;
