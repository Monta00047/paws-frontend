export interface IButton {
  id: number;
  href: string;
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}

export interface IImage {
  id: number;
  width: number;
  height: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
