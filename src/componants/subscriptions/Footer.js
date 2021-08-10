import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import support_phone_number from "./../../asset&fonts/img/support-phone-number.svg";
import twitter from "./../../asset&fonts/img/twitter.svg";
import instagram from "./../../asset&fonts/img/instagram.svg";
import linkedin from "./../../asset&fonts/img/linkedin.svg";
import sibappBlack from "./../../asset&fonts/img/sib-app-black.svg";
import bazarBlack from "./../../asset&fonts/img/black-bazar.svg";
import Logo from "./../subscriptions/Logo";

function Footer() {
  return (
    <div>
      <div className='section '>
        <div className='support-blue-header'>
          <h1>پشتیبانی درمانیتو</h1>
          <p>پاسخگویی در روزهای کاری از 9 صبح تا 9 شب</p>
          <div>
            <img src={support_phone_number} alt='' />
          </div>
        </div>
        <div className=' support-main '>
          <div>
            <Logo />
            <h3>سوپر اپلیکیشن حوزه درمان و سلامت</h3>
            <p>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</p>
            <div>
              <div>
                <img src={linkedin} alt='' />
              </div>
              <div>
                <img src={twitter} alt='' />
              </div>
              <div>
                <img src={instagram} alt='' />
              </div>
            </div>
          </div>
          <div className='support-main-lists '>
            <ul>
              <li>خدمات درمانیتو</li>
              <li className='heading-title'> داروخانه آنلاین</li>
              <li> ویزیت آنلاین</li>
              <li> پرونده پزشکی</li>
            </ul>
            <ul>
              <li> صفحات درمانیتو</li>
              <li>
                <Link to='contact-us'> تماس با ما </Link>{" "}
              </li>
              <li>
                <Link to='FAQ'> سوالات متداول </Link>
              </li>
              <li> قوانین و شرایط</li>
            </ul>
          </div>
          <div className=' support-app-download-box '>
            <h2>دانلود درمانیتو</h2>
            <div>
              <img src={sibappBlack} alt='' />
              <img src={bazarBlack} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
