import styled from 'styled-components';
import Link from 'next/link';

import { flexCenter, flexCenterColumn } from 'styles/utils';
import Footer from './Footer';

interface Props {
  toggleTheme: () => void;
  theme: string;
  children: React.ReactNode;
}

const LayoutWrapper = ({ toggleTheme, theme, children }: Props) => {
  return (
    <Container>
      <Component>
        <Header>
          <div>
            <Link href="/">
              <Title>🐤 halang</Title>
            </Link>
          </div>
          <HeaderNavLinks>
            <Link href="/about">소개</Link>
            <ThemeChange onClick={toggleTheme} aria-label="테마 변경 버튼">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {theme === 'dark' ? (
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                )}
              </svg>
            </ThemeChange>
          </HeaderNavLinks>
        </Header>
        {children}
        <Footer />
      </Component>
    </Container>
  );
};

export default LayoutWrapper;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;

const Container = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 3rem;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.textColor};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThemeChange = styled.button`
  background-color: ${({ theme }) => theme.colors.bgColor};
  width: 3rem;
  height: 3rem;
  svg {
    color: ${({ theme }) => theme.colors.textColor};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const HeaderNavLinks = styled.div`
  ${flexCenter};
  font-size: ${({ theme }) => theme.fontSize.md};

  a {
    margin: 1.6rem;
  }
`;
