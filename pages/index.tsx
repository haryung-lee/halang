import Link from 'next/link';
import styled from 'styled-components';
import { flexCenter, flexCenterColumn } from 'styles/utils';

import Game from './playground/game/whack-a-mole-game';

const game = [
  {
    url: '/playground/game/whack-a-mole-game',
    title: '두더지 게임',
    description: '제한 시간 내 두더지를 잡아보세요✋',
    img: '/images/mole-logo.png',
    children: Game,
  },
  // {
  //   url: '/playground/d3/bar-chart',
  //   title: '빠 차트',
  //   description: '빠 차트를 보세요 📈',
  //   img: '/images/bar-chart.png',
  //   children: Game,
  // },
  // {
  //   url: '/playground/game/dalgona-game',
  //   title: '달고나 뽑기',
  //   description: '달고나를 뽑아보세요 🍨',
  //   img: '/images/dalgona.png',
  // },
];

export default function Home() {
  return (
    <div>
      <main>
        <Title>소소한 놀이터 🎡</Title>
        <Contents>
          {game.map((game) => (
            <Card>
              <Link href={`/${game.url}`}>
                <img src={game.img} alt="game logo" width={130} height={130} />
                <Title>{game.title}</Title>
                <Description>{game.description}</Description>
              </Link>
            </Card>
          ))}
        </Contents>
      </main>
    </div>
  );
}

const Contents = styled.ul`
  display: flex;

  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSize.sm};
  gap: 2rem;
`;

const Card = styled.li`
  a {
    ${flexCenterColumn}
  }
  img {
    background-color: ${({ theme }) => theme.color.bgColor2};
    border-radius: 50%;
    padding: 0.4rem;
  }
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
  width: 184px;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  margin-top: 0.6rem;

  &:first-child {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 700;
    margin: 1rem 0;
    height: 2rem;
  }
`;

const Description = styled.p`
  margin-top: 0.4rem;
  color: gray;
`;
