import styled from "styled-components";
import topImg from "../static/assets/top_header_bg.png";
import headerImg from "../static/assets/benefits_header_bg.png";
import ReactPlayer from "react-player";

/**
 * 메인 텍스트 폰트 사이즈: 54px
 * 메인 텍스트 폰트 굵기: 600
 */

function Main() {
  return (
    <div>
      <Block>
        <TitleText>뮤커톤</TitleText>
        <Text>
          세상에 없던 나의 첫 음악<br></br>함께 즐기면서 경험하는 음악 협업
          프로젝트
        </Text>
      </Block>
      <div>
        <MainText>What is</MainText>
        <SubText>Mukathon?</SubText>
        <Paragraph>
          뮤커톤은 음악을 즐기고 싶은 일반인들을 대상으로<br></br>
          전문가들의 가이드를 통해 정해진 기간 내에 팀을 구성하여<br></br>
          커버곡 또는 자작곡을 완성하고 앨범 제작 및 공연까지<br></br>
          진행하는 음악 협업 경험 프로젝트입니다.
        </Paragraph>
        <Video>
          <ReactPlayer
            className="player"
            url={"https://youtu.be/trE4htAzay8"}
            width="560px"
            heigth="315px"
            playing={false}
            muted={true}
            controls={true}
          />
        </Video>
      </div>
      <div>
        <Benefit>
          <FirstText>뮤커톤만의 혜택</FirstText>
        </Benefit>
      </div>
      <div>
        <Grid>
          <Item>
            <Number>01</Number>
            <Intro>다른 뮤지션과 함께 경험하는 음악 협업</Intro>
          </Item>
          <Item>
            <Number>02</Number>
            <Intro>음악활동을 도와주는 든든한 멘토진</Intro>
          </Item>
          <Item>
            <Number>03</Number>
            <Intro>잊지 못할 추억을 간직할 수 있는 굿즈까지</Intro>
          </Item>
        </Grid>
      </div>
    </div>
  );
}

const Block = styled.main`
  width: 100%;
  height: 400px;
  background-image: url(${topImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const TitleText = styled.div`
  text-align: center;
  vertical-align: center;
  color: white;
  font-size: 40px;
  padding-top: 130px;
`;

const Text = styled.div`
  line-height: 30px;
  text-align: center;
  color: white;
  font-size: 18px;
  opacity: 0.7;
  padding-top: 25px;
`;

const MainText = styled.div`
  font-size: 36px;
  font-weight: lighter;
  letter-spacing: 1.5px;
  color: #785ffa;
  padding-top: 150px;
  padding-left: 250px;
`;

const SubText = styled.div`
  font-size: 36px;
  letter-spacing: 1.5px;
  color: #785ffa;
  padding-left: 250px;
`;

const Paragraph = styled.div`
  opacity: 0.7;
  line-height: 25px;
  letter-spacing: -1px;
  padding-top: 40px;
  padding-left: 250px;
`;

const Video = styled.div`
  float: right;
  padding-right: 250px;
  margin-top: -300px;
`;

const Benefit = styled.div`
  width: 1440px;
  height: 270px;
  display: block;
  margin: 0px auto;
  margin-top: 210px;
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const FirstText = styled.div`
  text-align: center;
  vertical-align: center;
  color: white;
  font-size: 30px;
  padding-top: 115px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;

const Item = styled.div``;

const Number = styled.div``;

const Intro = styled.div``;

export default Main;
