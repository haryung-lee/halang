import styled from 'styled-components';

const About = () => {
  return (
    <Component>
      <Contents>
        <Type>
          이하령<English>frontend developer</English>
        </Type>
      </Contents>
      <Contents>
        <Type>Introduce.</Type>
        <Paragraph>
          고객을 위한 서비스를 만드는 것을 좋아합니다. 피드백을 귀기울여 듣고
          어떻게 하면 더 나은 경험을 줄 수 있을지 고객의 관점에서 생각합니다.
        </Paragraph>
        <Paragraph>
          여러 사람들과 소통하는 것을 좋아합니다. 틀림이 아닌 다름으로 바라보며
          팀워크를 중요시 생각합니다.
        </Paragraph>
      </Contents>
      <Contents>
        <Type>Education.</Type>
        <Description>
          <List>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.swmaestro.org/sw/main/main.do"
            >
              SW 마에스트로 13기
            </a>
            <Date>2022.04 ~ 2022.11</Date>
          </List>
          <List>
            <span>인천대학교 컴퓨터공학부</span>
            <Date>2020.03 ~ (휴학중)</Date>
          </List>
        </Description>
      </Contents>
      <Contents>
        <Type>Projects.</Type>
        <Description>
          <List>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://modocode.com/"
            >
              모도코
            </a>
            <Date>2022.04 ~ 2022.11</Date>
            <Paragraph>
              소프트웨어 마에스트로에서 기획부터 배포까지 3인 1팀으로 진행한
              프로젝트입니다. <br /> 개발자들을 위한 온라인 모각코 웹
              플랫폼입니다.
            </Paragraph>
          </List>
        </Description>
      </Contents>
      <Contents>
        <Type>Contacts.</Type>
        <Description>
          <List>
            <strong>Email </strong>| lhr4884@naver.com
          </List>
        </Description>
      </Contents>
    </Component>
  );
};

export default About;

const Component = styled.main``;

const Contents = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &:first-child {
    background-color: ${({ theme }) => theme.color.bgColor2};
    padding: 1rem;
    border-radius: 0.5rem;
    height: 10rem;
  }
`;

const Type = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
`;

const English = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 400;
  color: gray;
  margin-left: 0.3rem;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.textColor};
  opacity: 0.8;
  margin-top: 0.5rem;
  text-align: justify;
  line-height: 1.5rem;
`;

const Description = styled.ul``;

const List = styled.li`
  margin-top: 0.5rem;
  opacity: 0.8;
  a {
    text-decoration: underline 0.1rem dashed;
    transition: all 0.3s ease;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
      background-color: ${({ theme }) => theme.color.primaryRed};
      color: ${({ theme }) => theme.color.bgColor};
    }
  }

  strong {
    font-weight: 700;
  }
`;

const Date = styled.span`
  color: gray;
  margin-left: 0.5rem;
`;
