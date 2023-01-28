import React from 'react';
import styled from 'styled-components';

import Email from './Email';
import Github from './Github';
import Website from './Website';

const components = {
  mail: Email,
  github: Github,
  website: Website,
};

interface Props {
  kind: 'mail' | 'github' | 'website';
  href: string;
  size?: string;
}

const SocialIcon = ({ kind, href, size = '8' }: Props) => {
  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;
  const SocialSvg: React.FC<React.SVGProps<SVGSVGElement>> = components[kind];

  return (
    <Anchor target="_blank" rel="noopener noreferrer" href={href}>
      <SocialKink aria-label={`사용자의 ${kind}로 이동하는 버튼`}>
        {kind}
      </SocialKink>
      <SocialSvg width={size} height={size} />
    </Anchor>
  );
};

const Anchor = styled.a`
  &:hover {
    svg {
      opacity: 0.7;
    }
  }
`;

const SocialKink = styled.span`
  display: none;
`;

export default SocialIcon;
