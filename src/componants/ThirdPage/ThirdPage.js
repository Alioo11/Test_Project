import React, { useState } from "react";
import "./ThirdPage.css";
import Footer from "./../subscriptions/Footer";
import shop from "./../../asset&fonts/img/shop.svg";
import pharmacy from "./../../asset&fonts/img/pharmacy.svg";
import doctor_toys from "./../../asset&fonts/img/doctor-toys.svg";
import calender from "./../../asset&fonts/img/calender.svg";
import NavBar from "./../subscriptions/NavBar";

import QuestionAndAnswers from "./QuestionAndAnswers";

function ThirdPage() {
  const [questionData, setQuestionData] = useState([
    {
      id: 1,
      question: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
      answer: "متن پاسخ",
      isSelected: false,
    },
    {
      id: 2,
      question: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
      answer: "متن پاسخ",
      isSelected: false,
    },
    {
      id: 3,
      question: "درمانیتو فقط در تهران و کرج فعال هست؟",
      answer: "خیر، ما هم اکنون در تهران در حال فعالیت هستیم",
      isSelected: true,
    },
    {
      id: 4,
      question: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
      answer: "متن پاسخ",
      isSelected: false,
    },
  ]);

  const hadleOpenQuestion = (QuestionId) => {
    setQuestionData(
      questionData.map((item) => {
        if (item.id == QuestionId) {
          return { ...item, isSelected: !item.isSelected };
        } else {
          return { ...item, isSelected: false };
        }
      })
    );
  };

  return (
    <div>
      <NavBar />
      <div className='common-questions-bluebox'> سوالات متداول</div>
      <div className='heading-container'>
        <h2 className='heading-title'>سوال شما درباره کدوم سرویس هست؟</h2>
      </div>
      <div className='section common-questions-box'>
        <div className='shadow'>
          <img src={pharmacy} alt='pharmacy' />
          <p>داروخانه</p>
        </div>
        <div className='shadow deactive'>
          <img src={shop} alt='shop' />
          <p>فروشگاه</p>
        </div>
        <div className='shadow deactive'>
          <img src={doctor_toys} alt='doctor_toys' />
          <p>ویزیت آنلاین</p>
        </div>
        <div className='shadow deactive'>
          <img src={calender} alt='calender' />
          <p>داروخانه</p>
        </div>
      </div>
      {/*  seconons section  */}
      <div className='questions-and-answers-container'>
        {questionData.map((data) => {
          return (
            <QuestionAndAnswers
              questionData={data}
              hadleOpenQuestion={hadleOpenQuestion}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ThirdPage;
