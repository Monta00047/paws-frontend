import type { IButton } from '../general';

export interface IHero {
  data: {
    id: number;
    button: IButton;
    title: string;
    subtitle: string;
    description: string;
  };
}
