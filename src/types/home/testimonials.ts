import type { CSSProperties } from 'react';

export interface ITestimonials {
  data: {
    title: string;
    testimony: ITestimony[];
  };
  styles?: CSSProperties;
}

export interface ITestimony {
  id: number;
  description: string;
  fullname: string;
  image: {
    id: number;
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
      };
    };
  };
}
