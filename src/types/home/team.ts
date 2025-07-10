import type { IImage } from '../general';

export interface ITeam {
  data: {
    title: string;
    item: IItem[];
  };
}
interface IItem {
  id: number;
  title: string;
  subtitle: string;
  icon: IImage;
}
