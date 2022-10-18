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
            width={"570px"} 
            height={"320px"}
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
          <FirstItem>
            <Number>01</Number>
            <Intro>다른 뮤지션과 함께 경험하는<br></br>음악 협업</Intro>
            <ParagraphText>
              나와 맞는 뮤지션을 매칭하여 팀을 이룰 수 있습니다.<br></br>팀을 이룬 후
              협업을 통해 버스킹, 뮤직 mt<br></br>그리고 최종 공연까지 참가 기간 동안
              <br></br>다양한 음악 활동을 경험할 수 있습니다.
            </ParagraphText>
          </FirstItem>
          <SecondItem>
            <Number>02</Number>
            <Intro>음악활동을 도와주는<br></br>든든한 멘토진</Intro>
            <ParagraphText>
              맞춤 멘토링부터 공연 음악 편곡, 믹싱까지<br></br>음악전문학원에서 제공하는
              연습실에서<br></br>소속 멘토 선생님들과 함께 멘토링을 진행하며<br></br>팀이 원하는
              음악을 만들 수 있도록 도와줍니다.
            </ParagraphText>
          </SecondItem>
          <ThirdItem>
            <Number>03</Number>
            <Intro>잊지 못할 추억을<br></br>간직할 수 있는 굿즈까지</Intro>
            <ParagraphText>
              녹음한 공연 곡과 공연 영상을 함께 편집한<br></br>영상 앨범부터 뮤커톤 참가
              기념 굿즈까지<br></br>뮤커톤을 통해 만난 값진 추억을 선물로 드립니다.
            </ParagraphText>
          </ThirdItem>
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
  margin-top: -270px;
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
padding-top: 10%;
padding-left: 15%;
grid-template-columns: 30% 30% 30%;
`;

const FirstItem = styled.div`
  position: relative;
`;
const SecondItem = styled.div`
position: relative;
`;
const ThirdItem = styled.div`
position: relative;
`;

const Number = styled.div`
  font-size: 80px;
  line-height: 35px;
  opacity: 0.1;
  margin-top: -30px;
`;

const Intro = styled.div`
  font-size: 20px;
  line-height: 30px;
  padding-top: 5px;
`;

const ParagraphText = styled.div`
  opacity: 0.7;
  line-height: 20px;
  letter-spacing: -1px;
  padding-top: 30px;
  font-size: 15px;
`;

export default Main;
