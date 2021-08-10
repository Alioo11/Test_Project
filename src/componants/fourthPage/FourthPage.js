import React from "react";
import "./FourthPage.css";
import map from "./../../asset&fonts/img/Map.svg";
import NavBar from "./../subscriptions/NavBar";
import Footer from "./../subscriptions/Footer";

function FourthPage() {
  return (
    <div>
      <NavBar />
      <div className='contant-us'>تماس با ما</div>
      <div className='contact-us-container'>
        <section>
          <div className='map-section'>
            <img src={map} alt='map' />
            <div className='address-container'>
              <div className='address-card shadow'>
                <div className='address'>
                  <h3>آدرس</h3>
                  <p>
                    تهران، طرشت، خیابان شهید چوب تراش، خیابان شهید حسین مردی،
                    بن‌بست پنجم، پلاک 15، واحد 1
                  </p>
                </div>
                <div className='email-address'>
                  <h3>آدرس</h3>
                  <p>info@nahiraTech.com</p>
                </div>
                <div className='phone-number'>
                  <h3>شماره ثابت</h3>
                  <p>۰۲۱-۴۴۲۱۹۶۷۱</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='register-container'>
            <form action='submit'>
              <div>
                <label htmlFor='name-lastname' name='name-lastname'>
                  نام و نام خانوادگی
                  <br />
                  <input
                    className='input'
                    placeholder='ایمیل یا شماره همراه'
                    name='name-lastname'
                    type='text'
                  />
                </label>
              </div>
              <div>
                <label htmlFor='name-lastname' name='name-lastname'>
                  ایمیل یا شماره همراه
                  <br />{" "}
                  <input
                    className='input'
                    placeholder='ایمیل یا شماره همراه'
                    name='name-lastname'
                    type='text'
                  />
                </label>
              </div>
              <div>
                <label htmlFor='name-lastname' name='name-lastname'>
                  پیام شما <br />{" "}
                  <textarea
                    className='input comment'
                    placeholder='ایمیل یا شماره همراه'
                    name='name-lastname'
                    type='text'
                  />
                </label>
              </div>
              <button className='btn contact-us-btn'> ارسال پیام </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default FourthPage;
