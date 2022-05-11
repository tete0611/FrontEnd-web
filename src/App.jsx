// import {Header} from './Header.jsx'
import React from 'react';
import './App.css';
import { BrowerRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {


const buttonClick = () => {
    window.open('https://www.naver.com'); //임시적으로 그냥 버튼함수 쓰는거 예시 보여줌 
    //window.location.href = "너가 나중에 라우팅하면 그주소 "
}
  return (
    <div className="App">
      <nav className="app_header">
        <div className="logo">
          <i class="fa-brands fa-42-group"></i>
          <a href="">Logo</a>
        </div>
        <div className="search">
          <button className="search_button" onClick={buttonClick}>
            검색
          </button>
        </div>
        <ul className="menu">
          <li><a href="" className="buy_button">공동구매</a></li>
          <li><a href="" className="login_button">로그인</a></li>
          <li><a href="" className="makeid_button">회원가입</a></li>
        </ul>
      </nav>
      <div className="banner_box">
        <div className="banner_title">
          공동구매 홍보타이틀 구역 입니다
        </div>
      </div>
      <div className="공동구매박스">
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
        <div className="item item6">6</div>
        <div className="item item7">7</div>
        <div className="item item8">8</div>
        <div className="item item9">9</div>
        <div className="item item10">10</div>
        <div className="item item11">11</div>
        <div className="item item12">12</div>
        <div className="item item13">13</div>
        <div className="item item14">14</div>
        <div className="item item15">15</div>
        <div className="item item16">16</div>
      </div>
      <div className="footer-container">

        <div className="로고박스">
          <i class="fa-brands fa-42-group"></i>
          Logo
        </div>
        <div className="이용약관">
          이용약관
        </div>
        <div className="개인정보처리방침">
          개인정보처리방침
        </div>
        <div className="사업자정보_1">
          (주)Logo는 통신판매중개자로서 
          총신판매의 당사자가 아니며 개별 판매자가 제공하는 
          서비스에 대한 이행, 계약사항 등과 관련한 의무와
          책임은 거래당사자에게 있습니다
        </div>
        <div className="사업자정보_2">
        상호명:(주)Logo ∙ 대표이사:KIM MIN JI ∙ 개인정보책인관리자:김태우 ∙ 
        주소:서울특별시 강남구 테헤란로 415, L7, 
        강남타워 5층 사업자등록번호:120-88-21-22325 ∙ 통신판매업신고증:제 2015-서울강남-00567 호 ∙ 
        직업정보제공사업 신고번호: 서울청 제 2019-21호 고객센터:1599-5319 ∙ 이메일:support@logo.com
        </div>
      </div>
    </div>
  );
}

export default App;