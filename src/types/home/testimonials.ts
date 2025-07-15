import type { CSSProperties } from 'react';

export interface ITestimonials {
  data: {
    title: string;
    testimony: ITestimony[];
  };
  styles?: CSSProperties;
}

interface ITestimony {
  title: string;
}
