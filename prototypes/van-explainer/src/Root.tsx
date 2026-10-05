import React from 'react';
import { Composition } from 'remotion';
import { VanExplainer } from './VanExplainer';
import { totalDurationInFrames, FPS } from './timing';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="VanExplainer"
      component={VanExplainer}
      durationInFrames={totalDurationInFrames}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
