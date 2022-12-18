import { useState } from 'react';
import styled from 'styled-components';

import WhackAAmoleGame from 'components/whackAMoleGame';

const WIDTH = 100;
const HEIGHT = 100;

// 1ms = 0.001s
// 1분 = 60m = 60 * 1000ms = 60 * 1000 * 0.001s = 60s
const TIMER = 10 * 1000;

const Games = () => {
  const [score, setScore] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timer, setTimer] = useState(TIMER);
  const holes = Array.from({ length: 9 });

  const handleStart = () => {
    if (isStart) return;
    setIsStart(() => true);

    const interval = setInterval(() => {
      if (timer > 0) tick();
      setTimer((prev) => prev - 1000);
    }, 1000);

    setTimeout(() => {
      setIsStart(() => false);
      setTimer(TIMER);
      setScore(0);

      clearInterval(interval);
    }, TIMER);
  };

  const handleMole = (event: React.MouseEvent<HTMLImageElement>) => {
    setScore((prev) => prev + 1);
    const mole = event.currentTarget;
    mole.classList.add('hidden');
    const deadMole = mole.nextElementSibling;
    deadMole?.classList.remove('hidden');
    setTimeout(() => {
      deadMole?.classList.add('hidden');
    }, 500);
  };

  const handleBomb = (event: React.MouseEvent<HTMLImageElement>) => {
    setScore((prev) => prev - 1);
    const bomb = event.currentTarget;
    bomb.classList.add('hidden');
    const touchBomb = bomb.nextElementSibling;
    touchBomb?.classList.remove('hidden');
    setTimeout(() => {
      touchBomb?.classList.add('hidden');
    }, 500);
  };

  const tick = () => {
    const targets = document.querySelectorAll('.target');
    const randomTarget = targets[Math.floor(Math.random() * targets.length)];
    // mole 아니면 bomb 선택하기
    const randomMoleOrBomb = Math.floor(Math.random() * 2);
    const moleOrBomb = randomMoleOrBomb === 0 ? '.mole' : '.bomb';
    const up = randomTarget.querySelector(moleOrBomb);
    up?.classList.remove('hidden');
    setTimeout(() => {
      up?.classList.add('hidden');
    }, Math.floor(Math.random() * 1000) + 500);
  };

  return (
    <Component>
      {!isStart && (
        <StartButton type="button" aria-label="시작 버튼" onClick={handleStart}>
          게임 시작
        </StartButton>
      )}
      <Score>
        ✅점수 : {score} ⏱️남은 시간 : {timer / 1000}초
      </Score>
      {Array.from({ length: 9 }).map((_, i) => {
        return (
          <Target className="target" key={i}>
            <img
              src="/assets/images/hole.png"
              alt="두더지 구멍"
              width={WIDTH}
              className="hole"
            />
            <img
              src="/assets/images/mole.png"
              alt="두더지"
              width={WIDTH}
              height={HEIGHT}
              className="mole hidden"
              onClick={handleMole}
            />
            <img
              src="/assets/images/dead-mole.png"
              alt="죽은 두더지"
              width={WIDTH}
              height={HEIGHT}
              className="dead-mole hidden"
            />
            <img
              src="/assets/images/bomb.png"
              alt="폭탄"
              width={WIDTH}
              height={HEIGHT}
              className="bomb hidden"
              onClick={handleBomb}
            />
            <img
              src="/assets/images/touch-bomb.png"
              alt="폭탄 터짐"
              width={WIDTH}
              height={HEIGHT}
              className="touch-bomb hidden"
            />
            {/* <img
              src="/assets/images/hole-front.png"
              alt="두더지 구멍"
              width={WIDTH}
              height={HEIGHT}
              className="hole-front"
            /> */}
          </Target>
        );
      })}
    </Component>
  );
};

export default Games;

const Component = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  gap: 1rem;
  place-items: center;

  background-color: green;
  border-radius: 1rem;
  height: 100%;
`;

const StartButton = styled.button`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: white;
`;

const Score = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Target = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
  }
  .hidden {
    display: none;
  }

  .hole {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hole-front {
    bottom: -3rem;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -85%);
  }

  .dead-mole,
  .mole,
  .bomb,
  .touch-bomb {
    cursor: pointer;
    top: 15%;
    left: 23%;
  }
`;
