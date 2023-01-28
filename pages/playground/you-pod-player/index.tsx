import React from 'react';
import styled from 'styled-components';

import YouPod from 'components/you-pod-player';

const index = () => {
  return (
    <Container>
      <YouPod />
    </Container>
  );
};

export default index;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
