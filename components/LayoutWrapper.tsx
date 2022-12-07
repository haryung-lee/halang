import styled from 'styled-components';

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
          <ThemeChange onClick={toggleTheme} aria-label="테마 변경 버튼">
            {theme === 'light' ? '🌙' : '☀️'}
          </ThemeChange>
        </Header>
        {children}
      </Component>
    </Container>
  );
};

export default LayoutWrapper;

const Container = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 3rem;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.textColor};
`;

const Header = styled.header`
  display: flex;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThemeChange = styled.button`
  background-color: ${({ theme }) => theme.colors.bgColor2};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
