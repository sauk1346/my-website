import React from 'react';
import { Audio, staticFile } from 'remotion';
import manifest from '../../public/audio-manifest.json';

export const BeatAudio: React.FC<{ beatId: string }> = ({ beatId }) => {
  const path = (manifest as Record<string, string>)[beatId];
  if (!path) return null;
  return <Audio src={staticFile(path)} />;
};
