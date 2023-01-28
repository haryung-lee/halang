import React, { useState } from 'react';
import styled from 'styled-components';

const YouTime = () => {
  return (
    <Container>
      <List>
        <Music>IU(아이유) _ BBIBBI(삐삐)</Music>
        <Music>아이유 (IU) - 드라마 (Drama)</Music>
        <Music>IU(아이유) _ YOU&I(너랑 나)</Music>
        <Music>IU(아이유) _ BBIBBI(삐삐)</Music>
        <Music>아이유 (IU) - 드라마 (Drama)</Music>
        <Music>IU(아이유) _ YOU&I(너랑 나)</Music>
      </List>
      <Setting>
        <MenuButton>MENU</MenuButton>
        <PrevButton className="material-symbols-outlined">
          skip_previous
        </PrevButton>
        <NextButton className="material-symbols-outlined">skip_next</NextButton>
        <PlayPauseButton className="material-symbols-outlined">
          play_pause
        </PlayPauseButton>
        <YoutubeButton className="material-symbols-outlined">
          youtube_activity
        </YoutubeButton>
      </Setting>
    </Container>
  );
};

export default YouTime;

const Container = styled.div`
  max-width: 20rem;
  margin: 0 auto;
  background-color: #d5d5d6;
  padding: 1.2rem 1.2rem 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
`;

const List = styled.ul`
  background-color: #262626;
  border: 4px solid #484848;
  height: 14rem;
  border-radius: 0.2rem;
  padding: 0.6rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Music = styled.li`
  font-size: 0.8rem;
  color: #fff;
  padding: 0.5rem 0.2rem;
  cursor: pointer;
  &:hover {
    color: #d5d5d6;
    background-color: #484848;
  }
  transition: all 0.2s ease-in-out;
`;

const Setting = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: #fff;
  border-radius: 50%;
  margin: 3rem auto;
  position: relative;
`;

const MenuButton = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #b8c1c9;
`;

const YoutubeButton = styled.button`
  color: #dd5353;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #e2e2e3;
  padding: 1.2rem;
  border-radius: 50%;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  background-color: #fff;
  color: #b8c1c9;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  background-color: #fff;
  color: #b8c1c9;
`;

const PlayPauseButton = styled.button`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #b8c1c9;
`;
