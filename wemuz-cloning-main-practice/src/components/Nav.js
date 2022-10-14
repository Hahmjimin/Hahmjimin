import styled from "styled-components";
import logo from "../static/assets/logo.png";

/**
 * 네비게이션 텝 텍스트 폰트 사이즈: 16px
 * 네비게이션 텝 텍스트 폰트 굵기: 600
 */

function Nav() {
  return (
    <Block>
      <LogoImg src={logo}></LogoImg>
      <NavBtn1>공지사항</NavBtn1>
      <NavBtn2>문의사항</NavBtn2>
      <NavBtn3>프로젝트</NavBtn3>
      <LoginBtn>로그인</LoginBtn>
    </Block>
  );
}

const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  box-shadow: 0 6px 14px rgb(0 0 0 / 15%);
  z-index: 100;
`;

const LogoImg = styled.img`
  width: 130px;
  height: 30px;
  margin: 15px;
  margin-left: 25px;
  &:hover {
    cursor: pointer;
  }
`;
const NavBtn1 = styled.button`
  position: relative;
  top: -23px;
  left: 930px;
  height: 40px;
  width: 80px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  border: 0px;
  outline: opx;
  &:hover {
    consur: pointer;
    color: #785ffa;
  }
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #785ffa;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const NavBtn2 = styled.button`
  position: relative;
  top: -23px;
  left: 940px;
  height: 40px;
  width: 80px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  border: 0px;
  outline: opx;
  &:hover {
    consur: pointer;
    color: #785ffa;
  }
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #785ffa;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const NavBtn3 = styled.button`
  position: relative;
  top: -23px;
  left: 950px;
  height: 40px;
  width: 80px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  border: 0px;
  outline: opx;
  &:hover {
    consur: pointer;
    color: #785ffa;
  }
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #785ffa;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const LoginBtn = styled.button`
  position: relative;
  top: -23px;
  left: 970px;
  height: 30px;
  width: 80px;
  text-align: center;
  line-height: 31px;
  background-color: #785ffa;
  border-radius: 5px;
  border: 0px;
  outline: opx;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  color: #fff;
`;

export default Nav;
