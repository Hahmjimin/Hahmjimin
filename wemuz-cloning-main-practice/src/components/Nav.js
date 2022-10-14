import styled from "styled-components";
import logo from "../static/assets/logo.png";

/**
 * 네비게이션 텝 텍스트 폰트 사이즈: 16px
 * 네비게이션 텝 텍스트 폰트 굵기: 600
 */

function Nav() {
  return (
    <Block>
      <Inner>
        <LogoImg src={logo}></LogoImg>
        <BtnContainer>
          <NavBtn>공지사항</NavBtn>
          <NavBtn>문의사항</NavBtn>
          <NavBtn>프로젝트</NavBtn>
          <LoginBtn>로그인</LoginBtn>
        </BtnContainer>
      </Inner>
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

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 100%;
  padding: 0 40px;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 140px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavBtn = styled.button`
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
  background-color: #785ffa;
  border-radius: 5px;
  border: 0px;
  outline: opx;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 18px;
  margin-left: 40px;
  transition: background-color 0.2s;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  color: #fff;
`;

export default Nav;
