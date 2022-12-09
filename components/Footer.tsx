import styled from 'styled-components';

import { flexCenterColumn } from 'styles/utils';
import SocialIcon from './socialIcon';
import { siteMetadata } from 'data/siteMetadata';

const Footer = () => {
  return (
    <Component>
      <Copyright>© 2022 halang</Copyright>
      <SocialIconComponent>
        <SocialIcon
          kind="mail"
          href={`mailto:${siteMetadata.email}`}
          size="6"
        />
        <SocialIcon kind="github" href={siteMetadata.github} size="6" />
        <SocialIcon kind="website" href={siteMetadata.website} size="6" />
      </SocialIconComponent>
    </Component>
  );
};

export default Footer;

const Component = styled.footer`
  ${flexCenterColumn};
  margin: 3rem 0;
  gap: 1rem;
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: gray;
`;

const SocialIconComponent = styled.div`
  display: flex;
  gap: 1rem;
`;
