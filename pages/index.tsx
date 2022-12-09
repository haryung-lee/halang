import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <main>
        <Contents>HI, I'm halang </Contents>
      </main>
    </div>
  );
}

const Contents = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;
