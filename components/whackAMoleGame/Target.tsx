import styled from 'styled-components';

const WIDTH = 90;
const HEIGHT = 90;

interface Props {
  onClick: (
    event: React.MouseEvent<HTMLImageElement>,
    index: number,
    score: number,
  ) => void;
  index: number;
}

export const Target = ({ onClick, index }: Props) => {
  return (
    <Component className="target" key={index}>
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
        onClick={(event) => onClick(event, index, 1)}
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
        onClick={(event) => onClick(event, index, -1)}
      />
      <img
        src="/assets/images/touch-bomb.png"
        alt="폭탄 터짐"
        width={WIDTH}
        height={HEIGHT}
        className="touch-bomb hidden"
      />
    </Component>
  );
};

const Component = styled.div`
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
    transform: translate(-50%);
  }

  .dead-mole,
  .mole,
  .bomb,
  .touch-bomb {
    cursor: pointer;
    top: 15%;
    left: 50%;
    transform: translate(-50%);
  }
`;
