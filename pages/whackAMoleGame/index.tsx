import { useState, useRef } from 'react';
import styled from 'styled-components';

import { Target } from 'components/whackAMoleGame/Target';
import { flexCenter } from 'styles/utils';

const TIMER = 30 * 1000;
const MOLE_PERCENT = 0.2;
const BOMB_PERCENT = 0.3;

const Games = () => {
  const [score, setScore] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const holes: any[] = Array.from({ length: 9 });
  const ref = useRef<HTMLInputElement>(null);

  const handleStart = () => {
    if (isStart) return;
    let width = TIMER / 10;

    setIsStart(true);
    setIsEnd(false);
    setScore(0);

    const interval = setInterval(() => {
      tick();
    }, 950);

    const frame = () => {
      if (width <= 0) {
        clearInterval(timerInterval);
      } else {
        width--;
        if (ref.current) {
          ref.current.style.width = `${(width / TIMER) * 1000}%`;
        }
      }
    };

    const timerInterval = setInterval(frame, 10);

    setTimeout(() => {
      clearInterval(interval);
      setIsStart(() => false);
      setIsEnd(true);
    }, TIMER);
  };

  const onClickTarget = (
    event: React.MouseEvent<HTMLImageElement>,
    index: number,
    score: number,
  ) => {
    setScore((prev) => prev + score);
    const target = event.currentTarget;
    target.classList.add('hidden');
    const deadTarget = target.nextElementSibling;
    deadTarget?.classList.remove('hidden');
    clearTimeout(holes[index]);
    setTimeout(() => {
      deadTarget?.classList.add('hidden');
    }, 500);
  };

  const tick = () => {
    const targets = document.querySelectorAll('.target');
    holes.forEach((hole, index) => {
      if (hole) return;
      const randomValue = Math.random();
      if (randomValue < MOLE_PERCENT) {
        const mole = targets[index].querySelector('.mole');
        holes[index] = setTimeout(() => {
          mole?.classList.add('hidden');
          holes[index] = 0;
        }, 1000);
        mole?.classList.remove('hidden');
      } else if (randomValue < BOMB_PERCENT) {
        const bomb = targets[index].querySelector('.bomb');
        holes[index] = setTimeout(() => {
          bomb?.classList.add('hidden');
          holes[index] = 0;
        }, 1000);
        bomb?.classList.remove('hidden');
      }
    });
  };

  return (
    <Component>
      <Timer>
        <Progressbar>
          <Current ref={ref} />
        </Progressbar>
      </Timer>
      <Field>
        {Array.from({ length: 9 }).map((_, i) => {
          return <Target onClick={onClickTarget} index={i} />;
        })}
        {isEnd && <End>{score}점 이에요👏</End>}
      </Field>
      {isStart ? (
        <Button as={'div'}>{score}</Button>
      ) : (
        <Button type="button" aria-label="시작 버튼" onClick={handleStart}>
          게임 시작
        </Button>
      )}
    </Component>
  );
};

export default Games;

const Component = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Timer = styled.div`
  height: 4rem;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  border-radius: 1rem 1rem 0 0;
`;

const Progressbar = styled.div`
  height: 1.5rem;
  width: 90%;
  margin: 1.25rem auto;
  background-color: ${({ theme }) => theme.color.bgColor};
  border-radius: 1rem;
`;

const Current = styled.input`
  height: 100%;
  background-color: orange;
  border-radius: 1rem;
  width: 100%;
`;

const Field = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  place-items: center;
  background-color: #4fa54f;
  height: 35rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primaryBlue};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: white;
  padding: 1rem 0;
  border-radius: 0 0 1rem 1rem;
  height: 4rem;
  box-sizing: border-box;
  ${flexCenter}
`;

const End = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  ${flexCenter}
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: white;
`;
