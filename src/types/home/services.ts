import type { IButton, IImage } from '../general';

export interface IServices {
  data: {
    id: number;
    button: IButton;
    title: string;
    item: IItem[];
  };
}

interface IItem {
  id: number;
  button: IButton;
  icon: IImage;
  title: string;
  subtitle: string;
}
