import type { IButton } from '../general';

export interface IVideoSection {
  data: {
    title: string;
    subtitle: string;
    description: string;
    button: IButton;
    video: IVideo;
  };
}

interface IVideo {
  url: string;
}
